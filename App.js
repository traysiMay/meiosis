import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  storageBucket: "gs://meiosis-bb688.appspot.com/",
};
firebase.initializeApp(firebaseConfig);

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
