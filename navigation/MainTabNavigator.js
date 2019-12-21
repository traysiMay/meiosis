import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Map from "../screens/Map";
import Scanner from "../screens/Scanner";

const config = Platform.select({
  web: { headerMode: "false" },
  default: { headerMode: "false" }
});
const MapStack = createStackNavigator(
  {
    Home: Map
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: ({ focused }) => <Text style={{ color: "white" }}>frog</Text>
};

MapStack.path = "";

const ScannerStack = createStackNavigator(
  {
    Scanner: Scanner
  },
  config
);

ScannerStack.navigationOptions = {
  tabBarLabel: "Scanner",
  tabBarIcon: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "green" }}>frog</Text>
  )
};

ScannerStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    MapStack,
    ScannerStack
  },
  { tabBarOptions: { activeTintColor: "red", style: { background: "black" } } }
);

export default tabNavigator;
