import CustomButton from "@components/CustomButton";
import React from "react";
import { View, Image, Text } from "react-native";
import logo from "@assets/candeiaLogo.png";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate("login");
  }

  return (
    <StyledContainer>
      <Image source={logo} />

      <StyledTitleSubtitle>
        <StyledTitle>Organize suas compras</StyledTitle>
        <StyledSubtitle>
          Tenha em um só lugar todo controle financeiro de sua empresa.
        </StyledSubtitle>
      </StyledTitleSubtitle>

      <CustomButton onPress={goToLogin} variant="primary">
        Iniciar
      </CustomButton>
    </StyledContainer>
  );
};

export default Home;

export const StyledContainer = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.YELLOW_700, theme.COLORS.GRAY_200],
  start: { x: 0.4, y: 0 },
  end: { x: 0, y: 1 },
  locations: [0.45, 0],
}))`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 48px 16px;
`;

export const StyledTitleSubtitle = styled.View`
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLUE_800};
`;

export const StyledSubtitle = styled.Text`
  font-size: 16px;
  width: 231px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLUE_800};
`;
