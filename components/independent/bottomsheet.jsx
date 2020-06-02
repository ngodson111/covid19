import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Bottom({
  data,
  setCountry,
  closemodal,
  wrapper,
  overlay,
}) {
  const [details, setdetails] = useState(Object.values(data.regions));
  //HANDELING SEARCH FILTER
  const all = Object.values(data.regions);
  const handelSearch = (item) => {
    if (item === "") {
      return setdetails(all);
    }
    let a = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].name.toLowerCase().indexOf(item.toLowerCase()) > -1) {
        a.push(all[i]);
      }
    }
    setdetails(a);
  };
  //HANDELING SEARCH FILTER

  //ANIMATION

  //ANIMATION
  return (
    <>
      {/* <Animated.View style={overlay} onTouchStart={closemodal} /> */}
      <Animated.View style={wrapper}>
        <View style={styles.inputsearchwrapper}>
          <TextInput
            placeholder="Search country"
            onChangeText={handelSearch}
            style={styles.inputsearch}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {details.map((item) => {
            return item.name === "DRC" ||
              item.name === "Diamond Princess" ||
              item.name === "Car" ||
              item.name === "Channel islands" ||
              item.name === "Ms Zaandam" ||
              item.name === "Lesotho" ? null : (
              <TouchableOpacity
                style={styles.container}
                key={item.name}
                onPress={() => setCountry(item)}
              >
                <View style={styles.main}>
                  <Image
                    style={styles.countryimage}
                    source={{
                      uri: `https://www.countryflags.io/${item.iso3166a2}/shiny/64.png`,
                    }}
                  />
                  <Text style={styles.countryname}>
                    {item.name} , {item.iso3166a2}
                  </Text>
                </View>
                <FontAwesome name="caret-right" size={24} color="#999fbf" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {},

  inputsearchwrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputsearch: {
    width: "80%",
    backgroundColor: "rgba(0,0,0,.2)",
    color: "grey",
    fontSize: 18,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 9,
    marginBottom: 20,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 0,
    marginBottom: 15,
    borderBottomColor: "rgba(0,0,0,.3)",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "80%",
  },
  countryname: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,.6)",
    marginLeft: 13,
  },
  countryimage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
