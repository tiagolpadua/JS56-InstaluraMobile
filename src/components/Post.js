import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import InputComentario from './InputComentario';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto, valorComentario: '',
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') :
            require('../../resources/img/s2.png')
    }

    adicionaComentario = () => {
        if (this.state.valorComentario === '')
            return;
        const novaLista = [...this.state.foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: this.state.valorComentario,
        }];
        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista,
        }
        this.setState({ foto: fotoAtualizada, valorComentario: '' });
        this.inputComentario.clear();
    }

    like = () => {
        const { foto } = this.state;
        let novaLista = [];
        if (!foto.likeada) {
            novaLista = [
                ...foto.likers,
                { login: 'meuUsuario' }
            ];
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario'
            });
        }
        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }
        this.setState({ foto: fotoAtualizada });
    }

    exibeLikes(foto) {
        if (foto.likers.length <= 0)
            return;
        return (
            <Text style={styles.likes}>
                {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    exibeLikes_exopc(foto) {
        return foto.likers.length > 0 &&
            <Text style={styles.likes}>
                {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
            </Text>
    }

    exibeLegenda(foto) {
        if (foto.comentario === '')
            return;
        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    render() {
        const { foto } = this.state;
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }}
                    style={styles.foto} />
                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.like}>
                        <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
                    </TouchableOpacity>
                </View>
                {this.exibeLikes(foto)}
                {this.exibeLegenda(foto)}
                {foto.comentarios.map(comentario =>
                    <View style={styles.comentario} key={comentario.id}>
                        <Text style={styles.tituloComentario}>{comentario.login}</Text>
                        <Text>{comentario.texto}</Text>
                    </View>)}
                <InputComentario />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    foto: {
        width: width,
        height: width,
    },
    rodape: {
        margin: 10,
    },
    botaoDeLike: {
        height: 40,
        width: 40,
    },
    likes: {
        fontWeight: 'bold'
    },
    comentario: {
        flexDirection: 'row',
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    novoComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    input: {
        flex: 1,
        height: 40,
    },
    icone: {
        height: 30,
        width: 30,
    },
});