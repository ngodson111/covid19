import React from "react";
import { StyleSheet, View } from "react-native";

//components
import Top from "./head/top";
import Bottom from "./head/bottom";

export default function Head({ data, item, currentCountry, openmodal }) {
  return (
    <View style={styles.container}>
      <Top currentCountry={currentCountry} />
      <Bottom openmodal={openmodal} item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: "#473f97",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  togglernotification: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bar1: {
    width: 26,
    height: 3,
    backgroundColor: "#ebeaf4",
    borderRadius: 100,
  },
  bar2: {
    marginTop: 7,
    width: 15,
    height: 3,
    backgroundColor: "#ebeaf4",
    borderRadius: 100,
  },
});
