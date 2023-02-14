import React from "react";
import { Image, TouchableOpacity, ScrollView, Text, View } from "react-native";
import * as Styles from "./styles";
import logo from "@assets/candeiaLogo.png";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { StyledContainer } from "@screens/Home";
import styled from "styled-components/native";
import { StyledTextTitle } from "@components/FontStyles/Titles";
import { AuthContext } from "../../context/auth";
import { API } from "../../services/api";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, user } = React.useContext(AuthContext);

  const navigation = useNavigation();

  async function tryToLogin() {
    if (email && password) {
      login(email, password);
    }
  }

  function goToSignUp() {
    navigation.navigate("signup");
  }

  return (
    <StyledContainerLogin>
      <View>
        <Image source={logo} />

        <StyledViewWelcome>
          <StyledTextTitle fontSize="XL">Bem vindo de volta!</StyledTextTitle>
        </StyledViewWelcome>
      </View>

      <Styles.BoxInputButton>
        <ScrollView>
          <CustomInput
            placeholder="Digite seu email"
            style={{ marginBottom: 15 }}
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <CustomInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={{ marginBottom: 24 }}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
        </ScrollView>

        <Styles.StyledForgotPassword>
          Esqueceu a senha
        </Styles.StyledForgotPassword>
      </Styles.BoxInputButton>

      <StyledButtonSignUp>
        <CustomButton onPress={tryToLogin} variant="primary">
          Entrar
        </CustomButton>
        <StyledTextGoToSignUp>
          <StyledTextNormal>Não possui uma conta? </StyledTextNormal>
          <TouchableOpacity onPress={goToSignUp}>
            <StyledTextStrong>Criar conta</StyledTextStrong>
          </TouchableOpacity>
        </StyledTextGoToSignUp>
      </StyledButtonSignUp>
    </StyledContainerLogin>
  );
};

export default Login;

const StyledContainerLogin = styled(StyledContainer)`
  display: flex;
`;

const StyledViewWelcome = styled.View`
  margin-top: 24px;
  margin-bottom: 48px;
`;

const StyledButtonSignUp = styled.View`
  width: 100%;
`;

const StyledTextGoToSignUp = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: -16px;
`;

const StyledTextNormal = styled.Text`
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`;

const StyledTextStrong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_700};
`;
