import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 71px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BoxTitle = styled.View`
  margin: 24px 0 32px 0;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BoxInputButton = styled.View`
  width: 100%;
  padding: 0 60px;
`;
