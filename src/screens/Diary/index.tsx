import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import styled from "styled-components/native";
import { Trash } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CoreContext } from "../../context/ContextDiary";
import { useContext } from "react";

interface ListTask {
  id: number;
  task: string;
  isChecked: boolean;
}

const Diary: React.FC = () => {
  const { taskList, setTaskList } = useContext(CoreContext);

  function removeItem(id: number) {
    setTaskList(
      taskList.filter((v) => {
        return v.id !== id;
      })
    );
  }

  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <StyledHeader>
        <StyledTextH1>Cadastro de Tarefa</StyledTextH1>

        <StyledTextP>
          Você tem {taskList.length}{" "}
          <Text style={{ fontWeight: "700" }}>Tarefas</Text>
        </StyledTextP>
      </StyledHeader>

      <View style={{ marginTop: 38 }}>
        {taskList.map((v, index) => (
          <LinearGradient
            colors={
              index % 2 === 0
                ? ["rgba(196, 196, 196, 0.25)", "rgba(196, 196, 196, 0)"]
                : ["#FFF", "#FFF"]
            }
            start={{ x: 0, y: 0 }}
            key={v.id}
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingRight: 24,
              paddingLeft: 24,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                value={v.isChecked}
                color={v.isChecked ? "#1DB863" : "#B2B2B2"}
                onValueChange={() =>
                  setTaskList(
                    taskList.map((update) => {
                      if (v.id === update.id) {
                        return {
                          ...update,
                          isChecked: !update.isChecked,
                        };
                      } else {
                        return update;
                      }
                    })
                  )
                }
                style={{ marginRight: 15, borderRadius: 4 }}
              />
              <Text
                style={
                  v.isChecked && {
                    textDecorationLine: "line-through",
                    color: "#1DB863",
                  }
                }
              >
                {v.title}
              </Text>
            </View>

            <TouchableOpacity onPress={() => removeItem(v.id)}>
              <Icon />
            </TouchableOpacity>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
};

export default Diary;

const StyledHeader = styled.View`
  height: 150px;
  background-color: #1db863;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  padding: 15px 20px;
  flex-wrap: wrap;
`;

const StyledTextH1 = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

const StyledTextP = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-top: 6px;
`;

const StyledContainerCheckbox = styled.View`
  padding: 15px 24px;
  justify-content: space-between;
  flex-direction: row;
`;

const Icon = styled(Trash).attrs(({ theme }) => ({
  color: "#B2B2B2",
  size: 24,
  // weight: "fill",
}))`
  margin-right: 20px;
`;
