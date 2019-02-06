import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default class AlbumArt extends Component {
  render() {
    return (
      <View style={styles.albumContainer}>
        <Image
          style={styles.image}
          source={require("../img/kingsOfLeon.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  albumContainer: {
    alignItems: "center",
    marginTop: 20
  },

  image: {
    width: 370,
    height: 370
  }
});
