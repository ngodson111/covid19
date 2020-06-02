import React from "react";
import { View, StyleSheet } from "react-native";
//package import
import { Entypo, Feather, FontAwesome, Foundation } from "@expo/vector-icons";
//package import
export default function Menu({ navigation, styler }) {
  return (
    <View style={styles.menucontainer}>
      <View
        style={styles.menu}
        style={styler === "home" ? styles.active : styles.menu}
      >
        <Entypo
          onPress={() => navigation.navigate("Home")}
          name="home"
          size={30}
          style={
            styler === "home" ? { color: "#ebeaf4" } : { color: "#999fbf" }
          }
        />
      </View>
      <View
        style={styles.menu}
        style={styler === "stats" ? styles.active : styles.menu}
      >
        <Feather
          onPress={() => navigation.navigate("Stats")}
          name="bar-chart-2"
          size={30}
          style={
            styler === "stats" ? { color: "#ebeaf4" } : { color: "#999fbf" }
          }
        />
      </View>
      <View
        style={styles.menu}
        style={styler === "news" ? styles.active : styles.menu}
      >
        <FontAwesome
          onPress={() => navigation.navigate("News")}
          name="newspaper-o"
          size={30}
          style={
            styler === "news" ? { color: "#ebeaf4" } : { color: "#999fbf" }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menucontainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopColor: "rgba(0,0,0,.3)",
    borderTopWidth: 0.5,
  },
  menu: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4c79ff",
  },
});
