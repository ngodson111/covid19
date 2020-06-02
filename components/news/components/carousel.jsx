import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import moment from "moment";
import Carouselitem from "./carouselitem";
const { width, height } = Dimensions.get("window");
let flatList;

function infiniteScroll(datalist) {
  const total = datalist.length;
  let scrollvalue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < total) {
      scrollvalue = scrollvalue + (width - 44);
    } else {
      scrollvalue = 0;
      scrolled = 0;
    }
    this.flatList.scrollToOffset({ animated: true, offset: scrollvalue });
  }, 5000);
}

export default function Carousel({ news }) {
  const [datalist, setdatalist] = useState(news);

  useEffect(() => {
    setdatalist(news);
    infiniteScroll(datalist);
  }, []);
  return (
    <FlatList
      ref={(flatList) => {
        this.flatList = flatList;
      }}
      data={news}
      keyExtractor={(item, index) => "key" + index}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Carouselitem item={item} />;
      }}
    />
  );
}
const styles = StyleSheet.create({});
