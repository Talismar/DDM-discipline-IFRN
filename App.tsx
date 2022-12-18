import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

import { Container, TextHeader, Header } from "./styles/sharedstyles";

import Button from "./components/Button";
import InputPrimary from "./components/InputPrimary";
import ItemContact from "./components/ItemContact";
import { NewContactStorage } from "./storage/contact";
import { contactGetAll } from "./storage/contact/getContact";
import { removeContact } from "./storage/contact/removeContact";

export default function App(): JSX.Element {
  const [contact, setContact] = React.useState<
    {
      id: number;
      name: string;
      number: string;
    }[]
  >([]);

  const [InputName, setInputName] = React.useState("");
  const [InputNumber, setInputNumber] = React.useState("");

  // async story
  async function NewContact() {
    if (contact.length > 0) {
      // console.log(contact);

      const lastId = contact.slice(-1)[0].id + 1;

      await NewContactStorage(lastId, InputName, InputNumber);

      setContact((prev) => [
        ...prev,
        { id: lastId, name: InputName, number: InputNumber },
      ]);
    } else {
      await NewContactStorage(0, InputName, InputNumber);

      setContact((prev) => [
        ...prev,
        { id: 0, name: InputName, number: InputNumber },
      ]);
    }

    // console.log(InputName, InputNumber);
    setInputName("");
    setInputNumber("");
  }

  async function fetchContact() {
    try {
      const data = await contactGetAll();

      const newArray = data.map((v, i) => {
        var listAux = v.split("-");

        return {
          id: parseInt(listAux[0]),
          name: listAux[1],
          number: listAux[2],
        };
      });
      setContact(newArray);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContact = (id: number) => {
    // console.log("Deleted", id);

    const copy_contact = contact.filter((v, i) => {
      if (v.id === id) {
      } else {
        return v;
      }
    });

    setContact(copy_contact);

    removeContact(id);
  };

  React.useEffect(() => {
    fetchContact();

    contact;
  }, []);

  return (
    <Container>
      <Header>
        <TextHeader>AGENDA TELEFÔNICA - DDM</TextHeader>
      </Header>

      <View style={styles.ContainerInputsButton}>
        <View style={{ marginBottom: 10 }}>
          <InputPrimary
            text="Nome:"
            icon={require("./assets/person.png")}
            valueInput={InputName}
            setInput={setInputName}
          />
        </View>
        <InputPrimary
          text="Celular:"
          icon={require("./assets/phone-small-black.png")}
          valueInput={InputNumber}
          setInput={setInputNumber}
          type="number"
        />

        <Button newContact={NewContact} />
      </View>

      <View style={styles.barContact}></View>

      <Text style={styles.listContactHeader}>Lista de Contatos</Text>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 32 }}>
          {contact.map((v, i) => {
            return (
              <ItemContact
                key={v.id}
                name={v.name}
                number={v.number}
                deleteContact={() => deleteContact(v.id)}
              />
            );
          })}
        </View>
      </ScrollView> */}

      <FlatList
        style={{ marginBottom: 32 }}
        showsVerticalScrollIndicator={false}
        data={contact}
        keyExtractor={(item) => item.number}
        renderItem={(v) => (
          <ItemContact
            key={v.item.id}
            name={v.item.name}
            number={v.item.number}
            deleteContact={() => deleteContact(v.item.id)}
          />
        )}
        ListEmptyComponent={() => <Text>Nenhum Contato Cadastrado</Text>}
      />
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
  ContainerInputsButton: {
    width: 241,
  },
});
