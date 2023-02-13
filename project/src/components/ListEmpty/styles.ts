import styled from "styled-components/native";

const Container = styled.View`
  /* Ocupar todo espaço disponivel tanto na horizontal quanto vertical */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.FONT_SIZE.SM}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.GRAY_300};
`;

export { Container, Message };
