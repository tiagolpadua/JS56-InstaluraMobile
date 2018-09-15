/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Image } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: 'rafael' },
      { id: 2, usuario: 'alberto' },
      { id: 3, usuario: 'vitor' }
    ];
    return (
      <FlatList style={{ marginTop: 20 }}
        keyExtractor={item => item.id + ''}
        data={fotos}
        renderItem={({ item }) =>
          <View>
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../resources/img/alura.png')}
                style={{ marginRight: 10, borderRadius: 20, width: 40, height: 40 }} />
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('../../resources/img/alura.png')}
              style={{ width: width, height: width }} />
          </View>
        }
      />
    );
  }
}
