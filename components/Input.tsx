import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

type Props = {
  text: string;
  icon: ImageSourcePropType;
};

const InputDefault: React.FC<Props> = ({ text, icon }) => {
  return (
    <SectionStyle>
      {icon && <Image source={icon} style={{ marginRight: -30, zIndex: 1 }} />}

      {text && (
        <StyleInput
          style={{ flex: 1 }}
          placeholder={text}
          underlineColorAndroid="transparent"
        />
      )}
    </SectionStyle>
  );
};

export default InputDefault;

const StyleInput = styled.TextInput`
  background-color: #ffffff;
  border-radius: 6px;
  border: 0.5px solid gray;

  padding-left: 50px;
  font-weight: 500;
`;

const SectionStyle = styled.View`
  width: 241px;
  height: 35px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
