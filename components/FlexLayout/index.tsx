import React from "react";
import styled from "styled-components/native";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #73769f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlexLayout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default FlexLayout;
