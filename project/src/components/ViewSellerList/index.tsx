import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ListPlus, X, Pencil } from "phosphor-react-native";

interface Props {
  children: React.ReactNode;
  icon: "list" | "edit";
  action?: () => void;
  actionDelete?: () => void;
}

const ViewSellerList: React.FC<Props> = ({
  children,
  icon,
  action,
  actionDelete,
}) => {
  return (
    <StyledContainer>
      <StyledText>{children}</StyledText>

      <StyledGroupIcon>
        <TouchableOpacity onPress={action}>
          {icon === "list" ? <ListIcon /> : <EditIcon />}
        </TouchableOpacity>
        <TouchableOpacity onPress={actionDelete}>
          <CloseIcon />
        </TouchableOpacity>
      </StyledGroupIcon>
    </StyledContainer>
  );
};

export default ViewSellerList;

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px 8px;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #303030;
`;

const StyledGroupIcon = styled.View`
  flex-direction: row;
`;

const ListIcon = styled(ListPlus).attrs(({ theme }) => ({
  size: 24,
  color: "#003057",
  weight: "bold",
}))`
  margin-right: 4px;
`;

const CloseIcon = styled(X).attrs(({ theme }) => ({
  size: 24,
  color: "#CC2937",
  weight: "bold",
}))``;

const EditIcon = styled(Pencil).attrs(({ theme }) => ({
  size: 24,
  color: "#003057",
  weight: "bold",
}))``;
