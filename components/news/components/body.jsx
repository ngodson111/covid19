import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Linking,
} from "react-native";
import moment from "moment";

import Carousel from "./carousel";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function Body({ news }) {
  return (
    <View style={styles.newswrapper}>
      <View style={styles.carousel}>
        <Carousel news={news} />
      </View>
      <View style={styles.newslist}>
        {news.map((item) => {
          return (
            <View style={styles.item} key={item._id}>
              <Image
                style={styles.itemimg}
                source={{
                  uri: item.image_url,
                }}
              />
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}...</Text>
                <View style={styles.bottompannel}>
                  <Text
                    style={{
                      marginRight: 10,
                      fontWeight: "600",
                      fontSize: 11,
                      color: "rgba(0,0,0,.6)",
                    }}
                  >
                    {moment(item.updated_at).fromNow()}
                  </Text>
                  <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontWeight: "600",
                        fontSize: 11,
                        color: "rgba(0,0,0,.6)",
                      }}
                    >
                      Read More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  newswrapper: {
    flex: 1,
    paddingHorizontal: 22,
  },
  carousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,.5)",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    borderRadius: 10,
    height: 200,
    width: "100%",
    marginTop: -(200 / 2),
    overflow: "hidden",
  },
  newslist: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: -5,
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    overflow: "hidden",
  },
  itemimg: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(0,0,0,.8)",
  },
  bottompannel: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
