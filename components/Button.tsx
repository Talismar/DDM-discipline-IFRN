import React from "react";
import styled from "styled-components/native";

function Button({ newContact }: { newContact: () => Promise<void> }) {
  return (
    <CustomButton onPress={newContact}>
      <CustomText>Adicionar</CustomText>
    </CustomButton>
  );
}

export default Button;

const CustomButton = styled.TouchableOpacity`
  height: 39px;
  background-color: #613eea;

  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  margin-top: 18px;
`;

const CustomText = styled.Text`
  color: #fff;
  font-weight: 600;
`;
