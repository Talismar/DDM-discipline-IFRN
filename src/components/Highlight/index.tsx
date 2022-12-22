import React from "react";
import { View } from "react-native";

import { Container, Title, SubTitle } from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}

export default Highlight;
