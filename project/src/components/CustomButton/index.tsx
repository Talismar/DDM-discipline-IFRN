import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import styled from "styled-components/native";

interface IProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: string;
}

const CustomButton: React.FC<IProps> = ({ children, variant, ...rest }) => {
  return (
    <Container {...rest} variant={variant}>
      <TextButton variant={variant}>{children}</TextButton>
    </Container>
  );
};

export default CustomButton;

const Container = styled.TouchableOpacity<Pick<IProps, "variant">>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.BLUE_700 : theme.COLORS.GREEN_500};
  border-radius: 8px;
  align-items: center;
  width: 100%;
`;

const TextButton = styled.Text<Pick<IProps, "variant">>`
  padding: 13px 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: 600;
`;
