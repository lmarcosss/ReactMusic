import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header";
import AlbumArt from "./AlbumArt";
import TrackDetails from "./TrackDetails";
import PlayBackControls from "./PlayBackControls";
import Seekbar from "./Seekbar";
export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <AlbumArt />
        <TrackDetails />
        <Seekbar />
        <PlayBackControls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "space-around",

    backgroundColor: "black"
  }
});
