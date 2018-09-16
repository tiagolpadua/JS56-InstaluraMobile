import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default class Likes extends Component {

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') :
            require('../../resources/img/s2.png')
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

    render() {
        const { likeCallback } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={likeCallback}>
                    <Image style={styles.botaoDeLike}
                        source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>{this.exibeLikes(foto.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    botaoDeLike: {
        height: 40,
        width: 40,
    },
    likes: {
        fontWeight: 'bold'
    }
});