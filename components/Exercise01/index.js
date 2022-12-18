import React from 'react';
import {View, Text} from 'react-native'
import styled from 'styled-components';


function Exercise01({message, height_, backgroundColor_, backgroundBorder_}) {

  const Container = styled.View`
    width: 80%;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10;
  `
  
  return <Container style={
    {
      height: height_,
      backgroundColor: backgroundColor_,
      borderColor: backgroundBorder_
    }}>

    <Text style={{fontSize: 18, fontWeight: '500'}}>{message}</Text>

  </Container>;
}

export default Exercise01;