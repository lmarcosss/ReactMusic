import React, { Component } from "react";
import { Text, View, Slider } from "react-native";

export default class Seekbar extends Component {
  render() {
    return (
      <View>
        <Slider
          minimumTrackTintColor="#fff"
          thumbTintColor="#fff"
          maximumTrackTintColor="#fff"
        />
      </View>
    );
  }
}
