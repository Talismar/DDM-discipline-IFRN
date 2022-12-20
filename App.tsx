import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Login from "./pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./Routes";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Login />
    // </View>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1DB863",
    alignItems: "center",
    justifyContent: "center",
  },
});
