import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

//IMPORTING COMPONENTS
import Top from "../independent/top";

const { width, height } = Dimensions.get("window");
export default function Head({ data, currentCountry, item }) {
  return (
    <View style={styles.container}>
      <Top currentCountry={currentCountry} />
      <Text style={styles.title}>Latest News</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: "#473f97",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: height / 2.3,
  },
  title: {
    fontWeight: "700",
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 25,
    color: "rgba(255,255,255,.8)",
    textShadowColor: "rgba(0,0,0,.3)",
    textShadowRadius: 3,
    textShadowOffset: { width: 3, height: 3 },
  },
});
