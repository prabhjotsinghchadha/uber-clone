import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import SafeViewAndroid from "./SafeViewAndroid";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
