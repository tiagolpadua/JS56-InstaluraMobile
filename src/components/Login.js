import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Usuário..."
                    onChangeText={texto => this.setState({ usuario: texto })} />
                <TextInput placeholder="Senha..."
                    onChangeText={texto => this.setState({ senha: texto })} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});