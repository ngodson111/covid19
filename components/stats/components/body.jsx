import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

//IMPORTING COMPONENTS
import Local from "./body/local";
import Global from "./body/global";

const { width, height } = Dimensions.get("window");
export default function Body({ data, item }) {
  const [details, setdetails] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    fetch("https://api.quarantine.country/api/v1/spots/summary").then((res) =>
      res.json().then((res2) => {
        setdetails(Object.entries(res2.data));
        setshow(true);
      })
    );
  }, []);
  //ANIMATION
  let position = new Animated.Value(4);
  let element1 = new Animated.Value(0);
  let element2 = new Animated.Value(width);
  const handelChange = () => {
    Animated.spring(position, {
      toValue: 4,
    }).start();
    Animated.spring(element1, {
      toValue: 0,
    }).start();
    Animated.spring(element2, {
      toValue: width,
    }).start();
  };
  const handelChange1 = () => {
    Animated.spring(position, {
      toValue: (width - 49) / 2,
    }).start();
    Animated.spring(element1, {
      toValue: -width,
    }).start();
    Animated.spring(element2, {
      toValue: 0,
    }).start();
  };
  let buttons = {
    position: "absolute",
    left: position,
    zIndex: -1,
    borderRadius: 30,
    width: "50%",
    height: 43,
    backgroundColor: "#ebeaf4",
  };
  let container1 = {
    position: "absolute",
    left: element1,
    width: "100%",
  };
  let container2 = {
    position: "absolute",
    left: element2,
    top: 0,
    width: "100%",
  };

  //ANIMATION
  return (
    <View style={styles.bodywrapper}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.selector}>
          <View onTouchStart={() => handelChange()}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                color: "rgba(0,0,0,.6)",
              }}
            >
              My Country
            </Text>
          </View>
          <View onTouchStart={() => handelChange1()}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                marginRight: 15,
                color: "rgba(0,0,0,.6)",
              }}
            >
              Global
            </Text>
          </View>
          <Animated.View style={buttons} />
        </View>
      </View>
      {show !== true ? null : (
        <View style={styles.content}>
          <Animated.View style={container1}>
            <Local data={data} item={item} />
          </Animated.View>
          <Animated.View style={container2}>
            <Global details={details} data={data} item={item} />
          </Animated.View>
        </View>
      )}
      <View style={{ marginBottom: 1200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodywrapper: {
    flex: 1,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgba(255,255,255,.2)",
    borderRadius: 30,
  },
  content: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
});
