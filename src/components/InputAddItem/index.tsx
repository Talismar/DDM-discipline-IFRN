import React from "react";
import { TouchableOpacity, TextInputProps } from "react-native";
import styled from "styled-components/native";
7;
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  onPress: () => void;
}

const InputAddItem: React.FC<Props> = ({ onPress, ...rest }) => {
  return (
    <StyledContainer>
      <StyledTextInput {...rest} />

      <StyledContainerAddIcon>
        <TouchableOpacity onPress={onPress}>
          <AddIcon name="add" />
        </TouchableOpacity>
      </StyledContainerAddIcon>
    </StyledContainer>
  );
};

export default InputAddItem;

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  padding-left: 16px;
  margin-top: 24px;
  margin-bottom: 32px;
  overflow: hidden;
`;

const StyledContainerAddIcon = styled.View`
  width: 44px;
  padding: 16px 0px;
  background-color: #e6eaee;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #303030;
`;

const AddIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_500,
}))``;
