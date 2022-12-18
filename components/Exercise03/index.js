import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #73769F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Exercise03 = () => {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default Exercise03;