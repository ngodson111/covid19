import React, { useState, useCallback } from "react";

import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  NativeModules,
} from "react-native";

//IMPORT INDEPENDENT COMPONENTS
import Head from "./components/head";
import Body from "./components/body";

export default function Home({ data, item, currentCountry, openmodal }) {
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

  return (
    <View style={styles.homewrapper}>
      {/* HOME SCROLL VIEW */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.homebody}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Head
          openmodal={openmodal}
          currentCountry={currentCountry}
          data={data}
          item={item}
        />
        <Body />
      </ScrollView>
      {/* HOME SCROLL VIEW */}
    </View>
  );
}
const styles = StyleSheet.create({
  homewrapper: {
    // height: Dimensions.get("window").height,
    flex: 1,
  },
  homebody: {
    flex: 1,
    marginBottom: 10,
  },
});
