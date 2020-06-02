import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Entypo, Feather, FontAwesome, Foundation } from "@expo/vector-icons";
import SkeletonContent from "react-native-skeleton-content";
//import navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//import components
import Home from "./components/home/home";
import Stats from "./components/stats/stats";
import News from "./components/news/news";
import Bottom from "./components/independent/bottomsheet";

import { Dimensions, Animated } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  //HANDEING STATES
  const [data, setdata] = useState([]);
  const [item, setitem] = useState({});
  const [loading, setloading] = useState(true);
  const [modal, setmodal] = useState(false);
  //HANDEING STATES

  //HANDEING INITIAL DATA LOAD
  useEffect(() => {
    fetch("https://api.quarantine.country/api/v1/summary/latest")
      .then((res) => res.json())
      .then((res2) => {
        setdata(res2.data);
        setitem(res2.data.regions.usa);
        setloading(false);
      })
      .catch((err) => {
        let alert1 = alert("No Internet Connection");
        if (alert1) {
          NativeModules.DevSettings.reload();
        }
      });
  }, []);
  //HANDEING INITIAL DATA LOAD

  //HANDEING USERS ADDRESS
  const handelLocation = () => {
    fetch("https://geoip-db.com/json")
      .then((res) => res.json())
      .then((res2) => {
        let set = Object.values(data.regions);
        for (let j = 0; j < set.length; j++) {
          if (set[j].iso3166a2 === res2.country_code) {
            return setitem(set[j]);
          }
        }
      })
      .catch((err) => console.log(err));
  };
  //HANDEING USERS ADDRESS

  //HANDEL MODAL
  let trans = new Animated.Value(-1000);
  let wrapper = {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "absolute",
    bottom: trans,
    left: 0,
    right: 0,
    height: "70%",
    zIndex: 999,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ebeaf4",
  };

  let initialindex = new Animated.Value(-5);
  let overlay = {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 998,
    elevation: 999,
    backgroundColor: "rgba(0,0,0,.6)",
    zIndex: initialindex,
  };
  let togglemodal = () => {
    if (this.togglemodal) {
      Animated.spring(trans, {
        toValue: 0,
      }).start();
      // Animated.timing(initialindex, {
      //   toValue: 998,
      //   timing: 10,
      // }).start();
    } else {
      Animated.spring(trans, {
        toValue: -1000,
      }).start();
      // Animated.timing(initialindex, {
      //   toValue: -1,
      //   timing: 10,
      // }).start();
    }
    this.togglemodal = !this.togglemodal;
  };
  //HANDEL MODAL

  //SELECTED COUNTRY
  const setCountry = (item) => {
    setitem(item);
    Animated.spring(trans, {
      toValue: -1000,
    }).start();
    // Animated.timing(initialindex, {
    //   toValue: -1,
    //   timing: 10,
    // }).start();
  };
  //SELECTED COUNTRY

  return (
    <SkeletonContent
      containerStyle={{ flex: 1 }}
      isLoading={loading}
      animationType="shiver"
      animationDirection="horizontalRight"
      highlightColor="#f2f8fc"
      layout={[
        {
          width: Dimensions.get("window").width,
          height: "50%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginBottom: 30,
        },
        {
          width: Dimensions.get("window").width - 200,
          height: 30,
          marginBottom: 10,
          left: 25,
        },
        {
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 6,
          left: 25,
        },
        {
          width: Dimensions.get("window").width - 230,
          height: 10,
          marginBottom: 30,
          left: 30,
        },
        {
          width: Dimensions.get("window").width,
          height: 100,
          marginBottom: 10,
        },
      ]}
    >
      <NavigationContainer>
        <Tab.Navigator
          tabBarPosition="bottom"
          tabBarOptions={{
            activeTintColor: "#fcfdff",
            inactiveTintColor: "#999fbf",
            tabStyle: {
              paddingVertical: 15,
              borderTopColor: "rgba(0,0,0,.3)",
              borderTopWidth: 0.5,
              position: "relative",
              marginBottom: 10,
            },
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
              backgroundColor: "#4c79ff",
              height: "70%",
              width: Dimensions.get("window").width / 4,
              borderRadius: 30,
              position: "absolute",
              left: 16,
              top: 10,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo
                  style={{ marginRight: -20, marginBottom: -20 }}
                  name="home"
                  size={30}
                  color={color}
                />
              ),
            }}
          >
            {() => (
              <Home
                currentCountry={() => handelLocation()}
                data={data}
                item={item}
                openmodal={() => togglemodal()}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Stats"
            options={{
              tabBarIcon: ({ color }) => (
                <Feather
                  style={{ marginRight: -20, marginBottom: -20 }}
                  name="bar-chart-2"
                  size={30}
                  color={color}
                />
              ),
            }}
          >
            {() => (
              <Stats
                currentCountry={() => handelLocation()}
                data={data}
                item={item}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="News"
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome
                  style={{ marginRight: -20, marginBottom: -20 }}
                  name="newspaper-o"
                  size={30}
                  color={color}
                />
              ),
            }}
          >
            {() => (
              <News
                currentCountry={() => handelLocation()}
                data={data}
                item={item}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>

      {/* {modal === true ? ( */}
      <Bottom
        wrapper={wrapper}
        overlay={overlay}
        closemodal={() => togglemodal()}
        setCountry={(item) => setCountry(item)}
        data={data}
      />
      {/* ) : null} */}
    </SkeletonContent>
  );
}
