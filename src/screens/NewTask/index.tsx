import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import React from "react";
import { FlatList, Text } from "react-native";
import * as Styles from "./styles";
import ListEmpty from "@components/ListEmpty";
import styled from "styled-components/native";
import CustomInput from "@components/CustomInput";
import CustomButton from "@components/CustomButton";
import SelectCategory from "@components/SelectCategory";
import CustomPickerDate from "@components/CustomPickerDate";

const NewTask: React.FC = () => {
  const [showCalendar, setShowcalendar] = React.useState(false);
  const [handleValues, setHandleValues] = React.useState({
    date: "Data",
    category: ["Alimentos", "Escolar"],
    selectCategory: "Categoria",
  });
  const [modalVisible, setModalVisible] = React.useState(false);

  function handleModalCalendar(date?: Date) {
    if (date != undefined) {
      setHandleValues({
        ...handleValues,
        date: `${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()}`,
      });
    }
    setShowcalendar(!showCalendar);
  }

  function handleModalCategory(name: string) {
    setHandleValues({ ...handleValues, selectCategory: name });
    setModalVisible(!modalVisible);
  }

  return (
    <Styles.Container>
      <StyledTitle>Cadastro de Tarefa</StyledTitle>

      <StyledBoxInputs>
        <CustomInput
          placeholder="Titulo"
          variant="outline"
          style={{ marginBottom: 14 }}
        />
        <CustomInput
          placeholder="Descrição"
          variant="outline"
          style={{ marginBottom: 14 }}
        />

        <StyledCustomInput
          style={{ marginBottom: 14 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: "#b2b2b2", fontWeight: "700" }}>
            {handleValues.selectCategory}
          </Text>
        </StyledCustomInput>

        <StyledCustomInput onPress={() => handleModalCalendar()}>
          <Text style={{ color: "#b2b2b2", fontWeight: "700" }}>
            {handleValues.date}
          </Text>
        </StyledCustomInput>

        {showCalendar && <CustomPickerDate chose={handleModalCalendar} />}

        <CustomButton variant="primary" style={{ marginTop: 30 }}>
          Cadastrar
        </CustomButton>
      </StyledBoxInputs>

      <SelectCategory
        modalVisible={modalVisible}
        items={handleValues.category}
        setModalVisible={handleModalCategory}
      />
    </Styles.Container>
  );
};

export default NewTask;

const StyledCustomInput = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px 16px;
  border-radius: 5px;

  border: 1px solid #b2b2b2;
  font-weight: bold;
`;

const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 24px;
  line-height: 28px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 68px;
  margin-bottom: 30px;
`;

const StyledBoxInputs = styled.View`
  width: 100%;
  padding: 0 32px;
`;
