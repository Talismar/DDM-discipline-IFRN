import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  background-color: #4e466a;
`;

const Item = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 15px;
`;
const Footer = () => {
  return (
    <Container>
      <Item>Exercício - DDM</Item>
    </Container>
  );
};

export default Footer;
