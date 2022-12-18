import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

/* My Components */
import FlexLayout from "./components/FlexLayout";

export default function App() {
  return (
    <View style={styles.container}>
      <FlexLayout />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
