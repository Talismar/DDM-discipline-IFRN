import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  background-color: #C4C4C4;
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
`

const Item = styled.Text`
  background-color: black;
  color: white;
  font-size: 18px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
`

const Itens = ['Menu', 'Logs', 'Credits']

const Header = () => {
  return (
  <Container>
    {Itens.map((v, i) => (
      <Item key={i}>{v}</Item>
    ))}
  </Container>
  )
}

export default Header;