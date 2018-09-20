import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Text,
    Button
} from 'react-native';

const width = Dimensions.get('screen').width;
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            senha: '',
        }
    }
    
    efetuaLogin = () => {
        const uri = "http://localhost:8080/api/public/login";
        fetch(uri)
        .then(response => {
        return response.text();
        })
        .then(token => console.warn(token));
        }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Usuário..."
                        onChangeText={texto => this.setState({ usuario: texto })} />
                    <TextInput style={styles.input}
                        placeholder="Senha..."
                        onChangeText={texto => this.setState({ senha: texto })} />
                    <Button title="Login" onPress={this.efetuaLogin} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
    }
});