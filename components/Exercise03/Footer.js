import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  background-color: #4E466A;
`

const Item = styled.Text`  
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 15px;
`
const Footer = () => {
  return (
  <Container>
    <Item>Exercício - DDM</Item>
  </Container>
  )
}

export default Footer;