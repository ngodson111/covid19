import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

export default function Frontbody() {
  return (
    <View style={styles.wrapper}>
      {/* PREVENTION METHOD */}
      <Text style={styles.title}>Prevention</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/hand-wash.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Clean your hand often</Text>
        </View>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/doctor.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Never ignore symptoms</Text>
        </View>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/patient.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Never avoid using mask</Text>
        </View>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/cough.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Cover while sneezing</Text>
        </View>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/hospital.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Proper health checkup</Text>
        </View>
        <View style={{ width: 100, marginRight: 20 }}>
          <Image
            source={require("../../../assets/safety.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Follow lockdown Rule</Text>
        </View>
      </ScrollView>
      {/* PREVENTION METHOD */}

      <View style={styles.doyour}>
        <Image
          style={styles.doyourimg}
          source={require("../../../assets/main1.png")}
        />
        <View style={{ width: "65%" }}>
          <Text style={styles.h1}>Do your own test!</Text>
          <Text style={styles.h2}>
            Follow the instruction to do your own text
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginTop: 25,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    color: "rgba(0,0,0,.8)",
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "600",
    fontSize: 12,
    marginTop: 10,
    color: "rgba(0,0,0,.8)",
    textAlign: "center",
  },
  doyour: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 40,
    backgroundColor: "#4cd97b",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doyourimg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  h1: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 18,
  },
  h2: {
    marginTop: 10,
    color: "rgba(0,0,0,.5)",
    fontSize: 13,
  },
});
