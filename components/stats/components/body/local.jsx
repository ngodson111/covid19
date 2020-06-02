import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

//IMPORTING COMPONENTS
import Total from "./components/total";
import Today from "./components/today";
import Yesterday from "./components/yesterday";

const { width, height } = Dimensions.get("window");

export default function Local({ data, item }) {
  const [month, setmonth] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.quarantine.country/api/v1/spots/month?region=${item.name}`
    )
      .then((res) => res.json())
      .then((res2) => {
        setmonth(Object.entries(res2.data));
        setshow(true);
      })
      .catch((err) => alert("No Internet Connection"));
  }, [item]);
  //HANDELING ANIMATION
  let element1 = new Animated.Value(0);
  let element2 = new Animated.Value(width + width);
  let element3 = new Animated.Value(width + width + width);
  const handelTotal = () => {
    Animated.spring(element1, {
      toValue: 0,
    }).start();
    Animated.spring(element2, {
      toValue: width + width,
    }).start();
    Animated.spring(element3, {
      toValue: width + width + width,
    }).start();
  };
  const handelToday = () => {
    Animated.spring(element2, {
      toValue: 0,
    }).start();
    Animated.spring(element1, {
      toValue: -width,
    }).start();
    Animated.spring(element3, {
      toValue: width + width,
    }).start();
  };
  const handelYesterday = () => {
    Animated.spring(element3, {
      toValue: 0,
    }).start();
    Animated.spring(element2, {
      toValue: -width,
    }).start();
    Animated.spring(element1, {
      toValue: -(width + width),
    }).start();
  };
  let container1 = {
    position: "absolute",
    left: element1,
    width: "100%",
  };
  let container2 = {
    position: "absolute",
    left: element2,
    width: "100%",
  };
  let container3 = {
    position: "absolute",
    left: element3,
    width: "100%",
  };
  //HANDELING ANIMATION
  return (
    <View style={styles.wrapper}>
      <View style={styles.bodywrapper}>
        <TouchableOpacity onPress={() => handelTotal()}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#b1aed3" }}>
            Total
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelToday()}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#b1aed3" }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelYesterday()}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#b1aed3" }}>
            Yesterday
          </Text>
        </TouchableOpacity>
      </View>
      {show !== true ? null : (
        <View style={styles.content}>
          <Animated.View style={container1}>
            <Total month={month} data={data} item={item} />
          </Animated.View>
          <Animated.View style={container2}>
            <Today month={month} data={data} item={item} />
          </Animated.View>
          <Animated.View style={container3}>
            <Yesterday month={month} data={data} item={item} />
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bodywrapper: {
    marginTop: 20,
    paddingHorizontal: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
});
