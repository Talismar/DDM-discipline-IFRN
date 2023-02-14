import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1; /* Ocupar todo espaço disponivel na tela */
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 200,
}))``;
