import React, { Component } from 'react';
import { FlatList, StyleSheet, Button, View, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import Post from './Post';
import InstaluraFetchService from '../services/InstaluraFetchService';
import Notificacao from '../api/Notificacao';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    this.carrega();
  }

  carrega() {
    InstaluraFetchService.get('/fotos')
      .then(json => this.setState({ fotos: json, status: 'NORMAL' }))
      .catch(e => this.setState({ status: 'FALHA_CARREGAMENTO' }));
  }

  buscaPorId(idFoto) {
    return this.state.fotos
      .find(foto => foto.id === idFoto);
  }

  atualizaFotos(fotoAtualizada) {
    return this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);
  }

  adicionaComentario = (idFoto, valorComentario, inputComentario) => {
    if (valorComentario === '')
      return;

    const foto = this.buscaPorId(idFoto);

    const comentario = {
      texto: valorComentario
    };

    InstaluraFetchService.post(`/fotos/${idFoto}/comment`, comentario)
      .then(comentario => [...foto.comentarios, comentario])
      .then(novaLista => {
        const fotoAtualizada = {
          ...foto,
          comentarios: novaLista
        }
        const fotos = this.atualizaFotos(fotoAtualizada);
        this.setState({ fotos });
        inputComentario.clear();
      });
  }

  like = (idFoto) => {
    const foto = this.buscaPorId(idFoto);

    const listaOriginal = this.state.fotos;

    AsyncStorage.getItem('usuario')
      .then(usuarioLogado => {
        let novaLista = [];
        if (!foto.likeada) {
          novaLista = [
            ...foto.likers,
            { login: usuarioLogado }
          ];
        } else {
          novaLista = foto.likers.filter(liker => {
            return liker.login !== usuarioLogado
          });
        }
        return novaLista;
      })
      .then(novaLista => {
        const fotoAtualizada = {
          ...foto,
          likeada: !foto.likeada,
          likers: novaLista
        };
        const fotos = this.atualizaFotos(fotoAtualizada);
        this.setState({ fotos });
      })
      .catch(err => console.warn('Erro ao curtir: ' + err));

    InstaluraFetchService.post(`/fotos/${idFoto}/like`)
      .catch(e => {
        this.setState({ fotos: listaOriginal })
        Notificacao.exibe('Ops..', 'Algo deu errado ao curtir.');
      });
  }

  logout = () => {
    AsyncStorage.removeItem('usuario');
    AsyncStorage.removeItem('token');
    this.props.navigator.resetTo({
      screen: 'Login',
      title: 'Instalura'
    });
  }

  render() {
    if (this.state.status === 'FALHA_CARREGAMENTO')
      return (
        <TouchableOpacity style={styles.container} onPress={this.carrega.bind(this)}>
          <Text style={[styles.texto, styles.titulo]}>Ops..</Text>
          <Text style={styles.texto}>Não foi possível carregar o feed</Text>
          <Text style={styles.texto}>Toque para tentar novamente</Text>
        </TouchableOpacity>
      );

    return (

      <View>
        <Button title="Logout" onPress={this.logout} />
        <FlatList style={styles.container}
          keyExtractor={item => item.id + ''}
          data={this.state.fotos}
          renderItem={({ item }) =>
            <Post foto={item}
              likeCallback={this.like}
              comentarioCallback={this.adicionaComentario} />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});
