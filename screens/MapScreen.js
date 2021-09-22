import React from "react";
import { SafeAreaView, Text, StatusBar, Platform } from "react-native";
import tw from "tailwind-react-native-classnames";

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
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default MapScreen;
