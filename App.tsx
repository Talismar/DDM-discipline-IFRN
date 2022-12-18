import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contador de Pessoas</Text>

      <Text style={styles.display}>{count}</Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => count > 0 && setCount(count - 1)}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#626BBA",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  display: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginVertical: 24,
    backgroundColor: "white",
    fontSize: 32,
    fontWeight: "700",
  },
  buttonPrimary: {
    width: 150,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 24,
    backgroundColor: "#rgb(46,35,83)",
  },
  textButton: {
    fontSize: 18,
    color: "white",
  },
});
