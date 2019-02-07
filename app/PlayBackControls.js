import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
export default class PlayBackControls extends Component {
  state = {
    playing: false
  };
  render() {
    playStop = this.state.playing
      ? require("../img/baseline_pause_white_18dp.png")
      : require("../img/baseline_play_arrow_white_18dp.png");

    return (
      <View style={styles.containerPlayback}>
        <TouchableOpacity>
          <Image
            style={styles.shuffleRepeat}
            source={require("../img/baseline_shuffle_white_18dp.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.nextPrevious}
            source={require("../img/baseline_skip_previous_white_18dp.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerPlayStop}
          onPress={() => this.setState({ playing: !this.state.playing })}
        >
          <Image style={styles.imagePlayStop} source={playStop} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.nextPrevious}
            source={require("../img/baseline_skip_next_white_18dp.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.shuffleRepeat}
            source={require("../img/baseline_repeat_white_18dp.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPlayback: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  nextPrevious: {
    width: 50
  },
  containerPlayStop: {
    width: 70,
    height: 70,
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  imagePlayStop: {
    width: 50
  },
  shuffleRepeat: {
    width: 25,
    height: 25
  }
});
