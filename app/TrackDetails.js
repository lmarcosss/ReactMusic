import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class TrackDetails extends Component {
  render() {
    return (
      <View style={styles.containerTrack}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../img/baseline_add_circle_outline_white_18dp.png")}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.band}>Kings of Leon</Text>
          <Text style={styles.music}>Sex on Fire</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.imageMenu}
            source={require("../img/baseline_more_horiz_white_18dp.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTrack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 20
  },
  image: {
    width: 30,
    height: 30,
    opacity: 0.7
  },
  imageMenu: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: "white",
    opacity: 0.7
  },
  band: {
    color: "white",
    fontSize: 20
  },
  music: {
    color: "gray",
    fontSize: 20,
    textAlign: "center"
  }
});
