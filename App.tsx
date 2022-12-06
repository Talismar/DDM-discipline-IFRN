import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Container, TextHeader, Header } from "./styles/sharedstyles";

import Button from "./components/Button";
import InputDefault from "./components/Input";
import ItemContact from "./components/Item";

export default function App(): JSX.Element {
  // async story

  return (
    <Container>
      <Header>
        <TextHeader>AGENDA TELEFÔNICA - DDM</TextHeader>
      </Header>

      <InputDefault
        text="Nome:"
        icon={require("./assets/user-small-black.png")}
      />
      <InputDefault
        text="Celular:"
        icon={require("./assets/phone-small-black.png")}
      />
      <Button />

      <View style={styles.barContact}></View>

      <Text style={styles.listContactHeader}>Lista de Contatos</Text>

      {[0, 1, 2].map((v, i) => {
        return <ItemContact key={i} />;
      })}
    </Container>
  );
}

const styles = StyleSheet.create({
  listContactHeader: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 23,
  },
  barContact: {
    width: "100%",
    backgroundColor: "#C4C4C4",
    height: 7,
    marginBottom: 12,
  },
});
