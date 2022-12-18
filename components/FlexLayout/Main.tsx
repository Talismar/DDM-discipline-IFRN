import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 0 50px;
  padding: 25px;
  border-radius: 16px;
  background-color: #8a8fc3;

  display: flex;
  align-items: center;
`;
const Item = styled.View`
  height: 135px;
  width: 250px;
  background-color: #b2b8fe;

  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Main = () => {
  return (
    <Container>
      <Item style={{ flexDirection: "row" }}>
        <View style={{ width: 55, height: "100%", backgroundColor: "black" }} />
        <View style={{ width: 55, height: "100%", backgroundColor: "black" }} />
        <View style={{ width: 55, height: "100%", backgroundColor: "black" }} />
      </Item>
      <Item style={{ flexDirection: "column", marginTop: 20 }}>
        <View style={{ width: "100%", height: 30, backgroundColor: "black" }} />
        <View style={{ width: "100%", height: 30, backgroundColor: "black" }} />
        <View style={{ width: "100%", height: 30, backgroundColor: "black" }} />
      </Item>
      <Item style={{ flexDirection: "row", marginTop: 20, flexWrap: "wrap" }}>
        {[...Array(15)].map((v, k) => (
          <View
            key={k}
            style={{
              width: 40,
              height: 30,
              backgroundColor: "black",
              marginVertical: 4,
            }}
          />
        ))}
      </Item>
    </Container>
  );
};

export default Main;
