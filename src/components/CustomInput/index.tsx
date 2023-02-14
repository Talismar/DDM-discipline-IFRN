import React from "react";
import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

interface IProps extends TextInputProps {
  variant?: string;
}

const CustomInput: React.FC<IProps> = ({ variant, ...rest }) => {
  return (
    <StyledCustomInput
      {...rest}
      placeholderTextColor="#B2B2B2"
      variant={variant}
    />
  );
};

export default CustomInput;

const StyledCustomInput = styled.TextInput<Pick<IProps, "variant">>`
  background-color: #fff;
  padding: 13px 16px;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "outline" &&
    css`
      border: 1px solid #b2b2b2;
      font-weight: bold;
    `}
`;
