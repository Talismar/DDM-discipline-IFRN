import React from "react";
import logoImg from "@assets/logo.png";

import * as S from "./styles";

interface HeaderProps {
  showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
}

export default Header;
