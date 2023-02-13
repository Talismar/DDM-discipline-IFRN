import styled from "styled-components/native";

// DOCS
/********** 
  SM: 14,
  MD: 16,
  LG: 20,
  XL: 24, 
**********/

type TextType = {
  textAlign?: "center" | "left" | "right";
  fontSize: "SM" | "MD" | "LG" | "XL";
};

export const StyledTextTitle = styled.Text<TextType>`
  width: 100%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme, fontSize }) => theme.FONT_SIZE[fontSize]}px; // 24px
  color: ${({ theme }) => theme.COLORS.BLUE_800};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;
