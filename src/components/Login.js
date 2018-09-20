import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Usuário..."
                        onChangeText={texto => this.setState({ usuario: texto })} />
                    <TextInput style={styles.input}
                        placeholder="Senha..."
                        onChangeText={texto => this.setState({ senha: texto })} />
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
    }
});