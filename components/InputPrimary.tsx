import React, { Dispatch, SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";

import styled from "styled-components/native";

type Props = {
  text: string;
  icon: ImageSourcePropType;
  valueInput: string;
  setInput: Dispatch<SetStateAction<string>>;
  type?: string;
};

const InputPrimary: React.FC<Props> = ({
  text,
  icon,
  setInput,
  valueInput,
  type,
}) => {
  function handlerInput(text: string) {
    setInput(text);
  }

  return (
    <ContainerInput>
      <ImageStyle source={icon} />

      {type === "number" ? (
        <StyleInput
          style={{ flex: 1 }}
          placeholder={text}
          underlineColorAndroid="transparent"
          value={valueInput}
          onChangeText={(e) => handlerInput(e)}
          keyboardType="numeric"
        />
      ) : (
        <StyleInput
          style={{ flex: 1 }}
          placeholder={text}
          underlineColorAndroid="transparent"
          value={valueInput}
          onChangeText={(e) => handlerInput(e)}
        />
      )}
    </ContainerInput>
  );
};

export default InputPrimary;

const StyleInput = styled.TextInput`
  background-color: #ffffff;
  border-radius: 6px;
  border: 0.5px solid gray;

  padding-left: 40px;
  font-weight: 500;
`;

const ContainerInput = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
`;

const ImageStyle = styled.Image`
  position: absolute;
  left: 12px;
  width: 18px;
  height: 16px;
  z-index: 1;
`;
