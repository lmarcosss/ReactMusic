import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require("../img/baseline_expand_more_white_18dp.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../img/baseline_queue_music_white_18dp.png")}
          />
        </TouchableOpacity>
      </View>
    );
    rr;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
