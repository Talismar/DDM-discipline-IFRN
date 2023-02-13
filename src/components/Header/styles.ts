import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 71px;
  width: 78px;
  height: 99px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;
