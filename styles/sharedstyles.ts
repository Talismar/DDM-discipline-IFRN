import styled from "styled-components/native";

const TextHeader = styled.Text`
  color: #ffffff;
  font-weight: 700;
`;

/* Container Header */
const Header = styled.View`
  height: 35px;
  width: 100%;
  background-color: #613eea;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
`;

const Container = styled.View`
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export { Container, TextHeader, Header };
