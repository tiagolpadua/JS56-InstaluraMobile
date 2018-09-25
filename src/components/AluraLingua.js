import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default class AluraLingua extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../resources/img/alura.png')} />
                <TouchableOpacity title="Aprenda Inglês">
                    <Text>Aprenda Inglês</Text>
                </TouchableOpacity>
            </View>
        );
    }
}