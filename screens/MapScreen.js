import React from "react";
import { SafeAreaView, Text, StatusBar, Platform, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
import NavigateCard from "../components/NavigateCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
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

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
