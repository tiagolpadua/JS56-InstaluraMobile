import React, { Component } from 'react';
import { FlatList, StyleSheet, Button, View, AsyncStorage } from 'react-native';
import Post from './Post';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    const uri = 'https://instalura-api.herokuapp.com/api/fotos';

    AsyncStorage.getItem('token')
      .then(token => {
        return {
          headers: new Headers({
            "X-AUTH-TOKEN": token
          })
        }
      })
      .then(requestInfo => fetch(uri, requestInfo))
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }))
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
    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario,
    }];
    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista,
    }
    const fotos = atualizaFotos(fotoAtualizada);
    this.setState({ fotos });
    inputComentario.clear();
  }

  like = (idFoto) => {
    const foto = this.buscaPorId(idFoto);

    const uri = `https://instalura-api.herokuapp.com/api/fotos/${idFoto}/like`;
    AsyncStorage.getItem('token')
      .then(token => {
        return {
          method: 'POST',
          headers: new Headers({
            "X-AUTH-TOKEN": token
          })
        }
      })
      .then(requestInfo => fetch(uri, requestInfo));

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
