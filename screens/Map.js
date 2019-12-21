import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import MapView from "react-native-maps";
import sexyMap from "./styles/sexyMap.json";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        options={{
          styles: sexyMap,
          disableDefaultUI: true
        }}
        customMapStyle={sexyMap}
        initialRegion={{
          latitude: 48.86,
          longitude: 2.34,
          latitudeDelta: 0.01,
          longitudeDelta: 0.001
        }}
        provider={MapView.PROVIDER_GOOGLE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
