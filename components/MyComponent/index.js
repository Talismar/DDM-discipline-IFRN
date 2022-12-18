import React from 'react';
import {View, Image, Text } from 'react-native';
import styled from 'styled-components';

const Photo = styled.Image`
  height: 70px;
  width: 70px;
`

const Container = styled.View`
  background-color: whitesmoke;
  width: 90%;

  display: flex;
  flex-direction: row;
`

function MyComponent({photo, title, subtitle}) {

  return <Container>
  
    <Photo source={photo}/>
    
    <View style={{marginLeft: 10}}>
      <Text style={{fontSize: 24}}>Title</Text>
      <Text>Sub Title</Text>
    </View>
    
  </Container>
}

export default MyComponent;