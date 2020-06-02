import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5, Foundation } from "@expo/vector-icons";

export default function Top({ currentCountry }) {
  return (
    <View>
      <View style={styles.togglernotification}>
        <TouchableOpacity onPress={currentCountry}>
          <FontAwesome5 name="location-arrow" size={23} color="#ebeaf4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Developed by Narayan Neupane")}>
          <Foundation name="info" size={30} color="#ebeaf4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  togglernotification: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
