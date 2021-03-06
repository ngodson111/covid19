import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import NumberFormat from "react-number-format";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "expo-chart-kit";
import moment from "moment";
//IMPORTING COMPONENTS

const { width, height } = Dimensions.get("window");

export default function Global({ details, item }) {
  const data = {
    labels: [
      moment(details[6][0]).format("ddd"),
      moment(details[5][0]).format("ddd"),
      moment(details[4][0]).format("ddd"),
      moment(details[3][0]).format("ddd"),
      moment(details[2][0]).format("ddd"),
      moment(details[1][0]).format("ddd"),
      moment(details[0][0]).format("ddd"),
    ],
    datasets: [
      {
        data: [
          details[6][1].total_cases,
          details[5][1].total_cases,
          details[4][1].total_cases,
          details[3][1].total_cases,
          details[2][1].total_cases,
          details[1][1].total_cases,
          details[0][1].total_cases,
        ],
      },
    ],
  };
  const data1 = {
    labels: [
      moment(details[6][0]).format("ddd"),
      moment(details[5][0]).format("ddd"),
      moment(details[4][0]).format("ddd"),
      moment(details[3][0]).format("ddd"),
      moment(details[2][0]).format("ddd"),
      moment(details[1][0]).format("ddd"),
      moment(details[0][0]).format("ddd"),
    ],
    datasets: [
      {
        data: [
          details[6][1].recovered,
          details[5][1].recovered,
          details[4][1].recovered,
          details[3][1].recovered,
          details[2][1].recovered,
          details[1][1].recovered,
          details[0][1].recovered,
        ],
      },
    ],
  };
  const data2 = {
    labels: [
      moment(details[6][0]).format("ddd"),
      moment(details[5][0]).format("ddd"),
      moment(details[4][0]).format("ddd"),
      moment(details[3][0]).format("ddd"),
      moment(details[2][0]).format("ddd"),
      moment(details[1][0]).format("ddd"),
      moment(details[0][0]).format("ddd"),
    ],
    datasets: [
      {
        data: [
          details[6][1].deaths,
          details[5][1].deaths,
          details[4][1].deaths,
          details[3][1].deaths,
          details[2][1].deaths,
          details[1][1].deaths,
          details[0][1].deaths,
        ],
      },
    ],
  };
  return (
    <View>
      <View style={{ ...styles.firstrow }}>
        <View style={styles.first1}>
          <Text style={styles.title}>Affected</Text>
          <NumberFormat
            value={details[0][1].total_cases}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number}>{value}</Text>}
          />
        </View>
        <View style={styles.first2}>
          <Text style={styles.title}>Death</Text>
          <NumberFormat
            value={details[0][1].deaths}
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
            value={details[0][1].recovered}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
        <View style={styles.second2}>
          <Text style={styles.title}>Active</Text>
          <NumberFormat
            value={details[0][1].active_cases}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
        <View style={styles.second3}>
          <Text style={styles.title}>Serious</Text>
          <NumberFormat
            value={details[0][1].critical}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <Text style={styles.number1}>{value}</Text>}
          />
        </View>
      </View>
      {/* CHART */}
      <View style={styles.chart}>
        <View style={styles.chart1}>
          <LineChart
            style={{
              transform: [{ scale: 0.9 }],
              marginLeft: -10,
            }}
            data={data}
            width={width}
            height={270}
            chartConfig={{
              backgroundGradientFrom: "#ffb259",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#ffb259",
              backgroundGradientToOpacity: 0.5,
              decimalPlaces: null,
              color: (opacity = 1) => `rgba(2, 2, 16, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: "#ffa726",
              },
            }}
            bezier
          />
        </View>
        <View style={styles.chart2}>
          <LineChart
            style={{
              transform: [{ scale: 0.9 }],
              marginLeft: -10,
            }}
            data={data1}
            width={width}
            height={270}
            chartConfig={{
              backgroundGradientFrom: "#4cd97b",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#4cd97b",
              backgroundGradientToOpacity: 0.5,
              decimalPlaces: null,
              color: (opacity = 1) => `rgba(255, 0, 146, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: "#ffa726",
              },
            }}
            bezier
          />
        </View>
        <View style={styles.chart3}>
          <LineChart
            style={{
              transform: [{ scale: 0.9 }],
              marginLeft: -10,
            }}
            data={data2}
            width={width}
            height={270}
            chartConfig={{
              backgroundGradientFrom: "#fd5858",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#fd5858",
              backgroundGradientToOpacity: 0.5,
              decimalPlaces: null,
              color: (opacity = 1) => `rgba(2, 25, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "0",
                stroke: "#ffa726",
              },
            }}
            bezier
          />
        </View>
      </View>
      {/* CHART */}
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
  chart: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 5,
  },
  chart1: {
    borderRadius: 20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#ffb259",
    marginBottom: 30,
  },
  chart2: {
    borderRadius: 20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#4cd97b",
    marginBottom: 30,
  },
  chart3: {
    borderRadius: 20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#fd5858",
  },
});
