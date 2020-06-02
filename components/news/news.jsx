import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  NativeModules,
  RefreshControl,
} from "react-native";

//IMPORT INDEPENDENT COMPONENTS
import Head from "./components/head";
import Body from "./components/body";

export default function News({ currentCountry }) {
  //STATE MANAGEMENT
  const [news, setnews] = useState([]);
  const [show, setshow] = useState(false);
  //STATE MANAGEMENT
  //FETCHING NEWS
  useEffect(() => {
    fetch("https://nepalcorona.info/api/v1/news")
      .then((res) => res.json())
      .then((res2) => {
        setnews(res2.data);
        setshow(true);
      })
      .catch((err) => alert("No Network Connection"));
  }, []);
  //FETCHING NEWS
  //REFRESH FACILITY
  function wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      NativeModules.DevSettings.reload();
    });
  }, [refreshing]);
  //REFRESH FACILITY
  return !show ? null : (
    <View style={styles.scrollview}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Head currentCountry={currentCountry} />
        <Body news={news} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
});
