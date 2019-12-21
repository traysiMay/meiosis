import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator></AppNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
