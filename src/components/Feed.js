import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }
  render() {
    return (
      <FlatList style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});
