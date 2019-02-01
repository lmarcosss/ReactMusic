import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class AlbumArt extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {}
});
