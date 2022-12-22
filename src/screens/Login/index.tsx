import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Styles from "./styles";
import logo from "@assets/logo.png";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";

const Login: React.FC = () => {
  return (
    <Styles.Container>
      <Image source={logo} />

      <Styles.BoxTitle>
        <Styles.Title>Agenda</Styles.Title>
        <Styles.Title>IFRN</Styles.Title>
      </Styles.BoxTitle>

      <Styles.BoxInputButton>
        <CustomInput placeholder="Login" style={{ marginBottom: 15 }} />
        <CustomInput placeholder="Senha" style={{ marginBottom: 24 }} />
        <CustomButton>Entrar</CustomButton>
      </Styles.BoxInputButton>
    </Styles.Container>
  );
};

export default Login;
