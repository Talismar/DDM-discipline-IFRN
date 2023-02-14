import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  index: number;
  name: string;

  delete_seller: (index: number) => void;
}

const ViewSeller: React.FC<Props> = ({ delete_seller, name, index }) => {
  const navigation = useNavigation();

  function goToSellerList() {
    navigation.navigate("sellerList", {
      index_seller: index,
    });
  }

  return (
    <StyledContainer>
      <StyledGroupIconText>
        <PersonIcon name="person" />
        <StyledText>{name}</StyledText>
      </StyledGroupIconText>

      <StyledGroupIcon>
        <TouchableOpacity onPress={goToSellerList}>
          <ListIcon name="menu" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => delete_seller(index)}>
          <CloseIcon name="close" />
        </TouchableOpacity>
      </StyledGroupIcon>
    </StyledContainer>
  );
};

export default ViewSeller;

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px 8px;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const StyledGroupIconText = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PersonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: "#00875F",
}))`
  margin-right: 4px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #303030;
`;

const StyledGroupIcon = styled.View`
  flex-direction: row;
`;

const ListIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: "#999999",
}))`
  margin-right: 4px;
`;

const CloseIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: "#CC2937",
}))``;
