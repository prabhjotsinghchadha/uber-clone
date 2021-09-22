import React from "react";
import { SafeAreaView, Text, StatusBar, Platform, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <SafeAreaView
      style={[
        tw`bg-white h-full`,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </SafeAreaView>
  );
};

export default MapScreen;
