import React, { Component } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const HomeCard = props => {
  return (
    <View style={[styles.card]}>
      <Image
        style={{ height: HEIGHT / 3, width: "100%" }}
        resizeMode="contain"
        source={props.img}
      />
      <View style={styles.overlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: HEIGHT / 3,
    width: WIDTH / 3,
    marginRight: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // backgroundColor: "purple",
    borderRadius: 15
    // opacity: 0.3
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgb(79, 70, 221)",
    opacity: 0.98,
    borderRadius: 15
  }
});

export default HomeCard;
