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
    variant === "primary" ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY};
  border-radius: ${({ variant }) => (variant ? "5px" : "0px")};
  align-items: center;
`;

const TextButton = styled.Text<Pick<IProps, "variant">>`
  padding: 12px 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
  font-weight: ${({ variant }) => (variant === "primary" ? "700" : "400")};
`;
