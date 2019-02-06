import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header";
import AlbumArt from "./AlbumArt";
import TrackDetails from "./TrackDetails";
export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <AlbumArt />
        <TrackDetails />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "black"
  }
});
