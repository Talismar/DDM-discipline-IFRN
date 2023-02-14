import React from "react";
import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";
import logoImg from "@assets/logoSmall.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  showBackButton?: boolean;
  screenName?: "dashboard" | "sellersStack" | "sellerList";
  params?: number;
}

function Header({ showBackButton = false, screenName, params }: HeaderProps) {
  const navigation = useNavigation();

  function goToScreens() {
    if (screenName !== undefined) {
      if (screenName === "sellerList") {
        navigation.navigate(screenName, {
          index_seller: params ? params : 0,
        });
      } else {
        navigation.navigate(screenName);
      }
    }
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={goToScreens}>
          <BackIcon />
        </BackButton>
      )}

      <Image source={logoImg} />
    </Container>
  );
}

export default Header;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
  weight: "bold",
}))`
  margin-left: -8px;
`;

const BackButton = styled.TouchableOpacity`
  flex: 1;
`;
