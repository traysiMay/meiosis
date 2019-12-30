import React from "react";
import { Platform, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Map from "../screens/Map";
import Scanner from "../screens/Scanner";
import Wallet from "../screens/Wallet"
import QRIcon from './icons/QR'
import MapIcon from './icons/Map'
import WalletIcon from './icons/Wallet'

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
  tabBarIcon: ({ focused }) => <MapIcon />
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
  // tabBarIcon: ({ focused }) => (
  //   <QRIcon />
  // )
};

ScannerStack.path = "";


const WalletStack = createStackNavigator(
  {
    Wallet: Wallet
  },
  config
);

WalletStack.navigationOptions = {
  tabBarLabel: "Wallet",
  // tabBarIcon: ({ focused }) => (
  //   <WalletIcon />
  // )
};

WalletStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    MapStack,
    ScannerStack,
    WalletStack
  },
  {
    tabBarOptions: { activeTintColor: "yellow", style: { backgroundColor: "black", borderTopColor: 'transparent' } }
  }
);

export default tabNavigator;
