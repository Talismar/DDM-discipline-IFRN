import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const Item = styled.Text`
  background-color: black;
  color: white;
  font-size: 18px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
`;

const Itens = ["Menu", "Logs", "Credits"];

const Header = () => {
  return (
    <Container>
      {Itens.map((v, i) => (
        <Item key={i}>{v}</Item>
      ))}
    </Container>
  );
};

export default Header;
