import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class Likes extends Component {
  carregaIcone(likeada) {
    return likeada
      ? require("../../resources/img/s2-checked.png")
      : require("../../resources/img/s2.png");
  }
  exibeLikes(likers) {
    if (likers.length <= 0) return;
    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? "curtidas" : "curtida"}
      </Text>
    );
  }

  render() {
    const { foto, likeCallback } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={likeCallback}>
          <Image
            style={styles.botaoDeLike}
            source={this.carregaIcone(foto.likeada)}
          />
        </TouchableOpacity>
        {this.exibeLikes(foto.likers)}
      </View>
    );
  }
}

Likes.propTypes = {
  foto: PropTypes.object,
  likeCallback: PropTypes.func
};

const styles = StyleSheet.create({
  botaoDeLike: {
    marginBottom: 10,
    height: 40,
    width: 40
  },
  likes: {
    fontWeight: "bold"
  }
});
