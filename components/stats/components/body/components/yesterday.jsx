import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import NumberFormat from "react-number-format";
const { width, height } = Dimensions.get("window");
export default function Yesterday({ data, item, month }) {
  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.firstrow}>
        <View style={styles.first1}>
          <Text style={styles.title}>Affected</Text>
          <NumberFormat
            value={month[1][1].total_cases - month[2][1].total_cases}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number}>{value}</Text>}
          />
        </View>
        <View style={styles.first2}>
          <Text style={styles.title}>Death</Text>
          <NumberFormat
            value={month[1][1].deaths - month[2][1].deaths}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number}>{value}</Text>}
          />
        </View>
      </View>
      <View style={styles.secondrow}>
        <View style={styles.second1}>
          <Text style={styles.title}>Recovered</Text>
          <NumberFormat
            value={month[1][1].recovered - month[2][1].recovered}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
        <View style={styles.second2}>
          <Text style={styles.title}>Tested</Text>
          <NumberFormat
            value={
              month[1][1].tested - month[2][1].tested < 0
                ? 0
                : month[1][1].tested - month[2][1].tested
            }
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
        <View style={styles.second3}>
          <Text style={styles.title}>Critical</Text>
          <NumberFormat
            value={
              month[1][1].critical - month[2][1].critical > 0
                ? month[1][1].critical - month[2][1].critical
                : 0
            }
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstrow: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secondrow: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  first1: {
    width: width / 2 - 30,
    borderRadius: 10,
    backgroundColor: "#ffb259",
    paddingHorizontal: 10,
    height: 90,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  first2: {
    width: width / 2 - 30,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 90,
    paddingVertical: 10,
    backgroundColor: "#fd5858",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "500",
    fontSize: 13,
    color: "#ebeaf4",
  },
  number: {
    fontWeight: "700",
    fontSize: 19,
    color: "#ebeaf4",
  },
  second1: {
    width: width / 3 - 15,
    borderRadius: 10,
    backgroundColor: "#4cd97b",
    paddingHorizontal: 10,
    height: 90,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  second2: {
    width: width / 3 - 15,
    borderRadius: 10,
    backgroundColor: "#3cb5ff",
    paddingHorizontal: 10,
    height: 90,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  second3: {
    width: width / 3 - 15,
    borderRadius: 10,
    backgroundColor: "#9059ff",
    paddingHorizontal: 10,
    height: 90,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  number1: {
    fontWeight: "700",
    fontSize: 12,
    color: "#ebeaf4",
  },
});
