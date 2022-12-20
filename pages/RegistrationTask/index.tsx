import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

// import { Container } from './styles';

const RegistrationTask: React.FC = () => {
  return (
    <View>
      <Text>Cadastro de Tarefa</Text>

      <CustomButton variant="secondary">Cadastrar</CustomButton>
    </View>
  );
};

export default RegistrationTask;
