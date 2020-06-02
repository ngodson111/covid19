import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeaderBody({ item, openmodal }) {
  const handelCall = () => {
    Linking.openURL(`tel:+977-9805401056`);
  };
  const handelSMS = () => {
    const url =
      Platform.OS === "android"
        ? "sms:+977-9805401056?body=I need Urgent Medication, Corona Alert!!"
        : "sms:+977-9805401056";
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Covid-19</Text>

        <TouchableOpacity onPress={openmodal} style={styles.selectwrapper}>
          <Image
            style={styles.countryimage}
            source={{
              uri: `https://www.countryflags.io/${item.iso3166a2}/shiny/64.png`,
            }}
          />
          <Text style={styles.countryname}>{item.iso3166a2}</Text>
          <FontAwesome name="caret-down" size={24} color="#61688b" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper1}>
        <Text style={styles.titletext}>Are you feeling sick ?</Text>
        <Text style={styles.paratext}>
          If you feel sick with any of covid-19 symptoms please call or SMS us
          immediately for help.
        </Text>
        <View style={styles.buttonwrapper}>
          <TouchableOpacity style={styles.button1} onPress={() => handelCall()}>
            <FontAwesome
              style={styles.fontstyle}
              name="phone"
              size={26}
              color="#ebeaf4"
            />
            <Text style={styles.text}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => handelSMS()}>
            <MaterialCommunityIcons
              style={styles.fontstyle}
              name="chat"
              size={26}
              color="#ebeaf4"
            />
            <Text style={styles.text}>Send SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#ebeaf4",
  },
  selectwrapper: {
    width: "38%",
    color: "black",
    backgroundColor: "#ebeaf4",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  selected: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  countryname: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  countryimage: {
    width: 20,
    height: 25,
    borderRadius: 50,
  },
  wrapper1: {
    marginTop: 20,
    flexDirection: "column",
  },
  buttonwrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button1: {
    backgroundColor: "#ff4c58",
    width: "48%",
    borderColor: "#ff4c58",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  button2: {
    backgroundColor: "#4c79ff",
    width: "48%",
    borderColor: "#ff4c58",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    color: "#ebeaf4",
    marginLeft: 5,
  },
  fontstyle: {
    fontWeight: "700",
    fontSize: 18,
  },
  titletext: {
    fontWeight: "700",
    fontSize: 18,
    color: "#ebeaf4",
  },
  paratext: {
    letterSpacing: 1,
    textAlign: "left",
    marginTop: 15,
    fontSize: 13,
    color: "#a29eca",
  },
});
