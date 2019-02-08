import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../img/baseline_expand_more_white_48dp.png")}
          />
        </TouchableOpacity>
        <Text style={styles.message}>PLAYING FROM CHARTS</Text>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../img/baseline_queue_music_white_48dp.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  message: {
    color: "white"
  },
  image: {
    width: 40,
    height: 40
  }
});
