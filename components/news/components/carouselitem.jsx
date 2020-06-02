import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import moment from "moment";

const { width, height } = Dimensions.get("window");

export default function Carouselitem({ item }) {
  return (
    <View style={styles.carousel1}>
      <Image
        style={styles.carouselimg}
        source={{
          uri: item.image_url,
        }}
      />
      <View style={styles.carouselcontent}>
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{moment(item.updated_at).fromNow()}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  carousel1: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  carouselimg: {
    flex: 1,
    width: width - 44,
    height: 200,
    // resizeMode: "cover",
    borderRadius: 10,
  },
  carouselcontent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text1: {
    fontWeight: "600",
    fontSize: 13,
    color: "rgba(255,255,255,.8)",
  },
  text2: {
    fontWeight: "600",
    fontSize: 12,
    marginTop: 5,
    color: "rgba(255,255,255,.5)",
  },
});
