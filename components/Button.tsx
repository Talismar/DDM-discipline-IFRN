import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';


const Button: React.FC = () => {
  return <CustomButton>
    <CustomText>Adicionar</CustomText>
  </CustomButton>;
}

export default Button;

const CustomButton = styled.TouchableOpacity`
  width: 241px;
  height: 39px;
  background-color: #613EEA;
  
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
`

const CustomText = styled.Text`

  color: #fff;
  font-weight: 600;
  
`