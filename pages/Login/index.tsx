import React from "react";
import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import logo from "../../assets/logo.png";
import CustomButton from "../../components/CustomButton";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <Text style={styles.textHeader}>Agenda</Text>
      <Text style={styles.textHeader}>IFRN</Text>

      <View style={styles.flexInput}>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Senha" />
      </View>

      <CustomButton>Entrar</CustomButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", marginTop: 71 },
  textHeader: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
  },
  flexInput: {
    marginTop: 24,
  },
  input: {
    backgroundColor: "white",
    width: 254,
    height: 42,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 16,
  },
});
