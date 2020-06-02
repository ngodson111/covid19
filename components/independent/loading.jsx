import React from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";

export default function Loading() {
  let rot = new Animated.Value(0);
  Animated.spring(rot, {
    toValue: 360,
    speed: 10,
  }).start();

  return (
    <>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Animated.View style={styles.load} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.6)",
  },
  content: {
    position: "absolute",
    left: 30,
    right: 30,
    top: "50%",
    height: "25%",
    backgroundColor: "#fff",
    transform: [{ translateY: "-100%" }],
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
