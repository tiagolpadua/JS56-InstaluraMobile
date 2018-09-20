import React, { Component } from 'react';
import {
    Dimensions,
    View,
    TextInput,
} from 'react-native';
const width = Dimensions.get('screen').width;
export default class Login extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Usuário..."
                    onChangeText={texto => this.setState({ usuario: texto })} />
                <TextInput placeholder="Senha..."
                    onChangeText={texto => this.setState({ senha: texto })} />
            </View>
        );
    }
}