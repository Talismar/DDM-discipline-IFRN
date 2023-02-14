import React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import * as Styles from "./styles";
import logo from "@assets/candeiaLogo.png";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  StyledContainer,
  StyledSubtitle,
  StyledTitle,
  StyledTitleSubtitle,
} from "@screens/Home";
import styled from "styled-components/native";
import { AuthContext } from "../../context/auth";
import { API } from "../../services/api";

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const { user, setUser } = React.useContext(AuthContext);
  const [password, setPassword] = React.useState({
    password1: "",
    password2: "",
  });

  function goToLogin() {
    navigation.navigate("login");
  }

  function verifySendPassword() {
    if (password.password1 === password.password2) {
      setUser({ ...user, password: password.password1 });

      const newUser = {
        name: user.name,
        photo: user.photo,
        email: user.email,
        password: password.password1,
      };

      API.post_user(newUser).then((res) => {
        console.log(res.data);
        setUser({
          ...user,
          email: "",
          password: "",
          name: "",
        });

        setPassword({
          password1: "",
          password2: "",
        });
      });

      console.log("new user created successfully");
    }
  }

  return (
    <ScrollView>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <Image source={logo} style={{ marginBottom: 24 }} />

        <StyledTitleSubtitle style={{ marginBottom: 43 }}>
          <StyledTitle>Bem vindo de volta!</StyledTitle>
          <StyledSubtitle>
            Vamos te ajudar a manter organização da sua empresa.
          </StyledSubtitle>
        </StyledTitleSubtitle>

        <Styles.BoxInputButton>
          <CustomInput
            placeholder="Digite seu nome"
            style={{ marginBottom: 15 }}
            onChangeText={(e) => setUser({ ...user, name: e })}
            value={user.name}
          />

          <CustomInput
            placeholder="Digite seu email"
            style={{ marginBottom: 15 }}
            onChangeText={(e) => setUser({ ...user, email: e })}
            value={user.email}
          />

          <CustomInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={{ marginBottom: 15 }}
            onChangeText={(e) => setPassword({ ...password, password1: e })}
            value={password.password1}
          />

          <CustomInput
            placeholder="Repita sua senha"
            secureTextEntry
            style={{ marginBottom: 24 }}
            onChangeText={(e) => setPassword({ ...password, password2: e })}
            value={password.password2}
          />

          <CustomButton variant="primary" onPress={verifySendPassword}>
            Criar
          </CustomButton>

          <StyledTextGoToLogin>
            <StyledTextNormal>Já tem uma conta? </StyledTextNormal>
            <TouchableOpacity onPress={goToLogin}>
              <StyledTextStrong>Entrar</StyledTextStrong>
            </TouchableOpacity>
          </StyledTextGoToLogin>
        </Styles.BoxInputButton>
      </StyledContainer>
    </ScrollView>
  );
};

export default Signup;

const StyledTextGoToLogin = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 18px;
`;

const StyledTextNormal = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`;

const StyledTextStrong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_700};
`;
