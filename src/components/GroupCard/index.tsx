import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

/* Assim */
interface IProps extends TouchableOpacityProps {
  title: string;
}

/* Or */
type TProps = TouchableOpacityProps & {
  title: string;
};

function GroupCard({ title, ...rest }: TProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default GroupCard;
