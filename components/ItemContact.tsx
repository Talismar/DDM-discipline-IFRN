import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

interface ItemContactProps {
  name: string;
  number: string;
  deleteContact: () => void;
}

const ItemContact: React.FC<ItemContactProps> = ({
  name,
  number,
  deleteContact,
}) => {
  return (
    <ContainerItemContact style={{ marginVertical: 8 }}>
      <View>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </View>

      <TouchableOpacity onPress={deleteContact}>
        <Image
          source={require("../assets/trash-small-black.png")}
          style={{ marginRight: -30, zIndex: 1 }}
        />
      </TouchableOpacity>
    </ContainerItemContact>
  );
};

export default ItemContact;

const ContainerItemContact = styled.View`
  width: 328px;
  height: 61px;
  border-radius: 6px;
  border: 1px solid #b6b4b4;
  background-color: #f4f4f4;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 42px 0 24px;
`;
