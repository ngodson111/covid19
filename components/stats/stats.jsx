import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  NativeModules,
} from "react-native";

//IMPORT INDEPENDENT COMPONENTS
import Top from "./components/independent/top";
import Body from "./components/body";

export default function Stats({ currentCountry, data, item }) {
  //REFRESH FACILITY
  const [refreshing, setRefreshing] = useState(false);
  function wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      NativeModules.DevSettings.reload();
    });
  }, [refreshing]);
  //REFRESH FACILITY
  return (
    <View style={styles.statswrapper}>
      <ScrollView
        style={styles.statsbody}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Top currentCountry={currentCountry} />
        <Text style={styles.title}>Statistics</Text>
        <Body data={data} item={item} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  statswrapper: {
    flex: 1,
  },
  statsbody: {
    paddingVertical: 30,
    backgroundColor: "#473f97",
  },
  title: {
    marginTop: 25,
    fontWeight: "600",
    color: "#ebeaf4",
    fontSize: 23,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
});
