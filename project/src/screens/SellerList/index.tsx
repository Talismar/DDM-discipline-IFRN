import Header from "@components/Header";
import InputAddItem from "@components/InputAddItem";
import ViewSellerList from "@components/ViewSellerList";
import React from "react";
import styled from "styled-components/native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CoreContext } from "../../context/ContextSystem";
import { API } from "../../services/api";

type RouteParams = {
  index_seller: number;
};

function SellerList() {
  const navigation = useNavigation();
  const { sellerList, setSellerList } = React.useContext(CoreContext);
  const route = useRoute();
  const { index_seller } = route.params as RouteParams;
  const [listName, setListName] = React.useState("");

  function goToMilkList(i: number) {
    navigation.navigate("milkList", {
      index_seller: index_seller,
      index_list: i,
    });
  }

  function newList() {
    if (listName.length > 0) {
      API.post_newSellerList({
        name: listName,
        seller: sellerList[index_seller].id,
      }).then((res) => {
        API.get_seller_list().then((response) => {
          setSellerList(response.data);
        });
        setListName("");
      });
    }
  }

  return (
    <StyledSellerList>
      <StyledContainerHeader>
        <Header showBackButton screenName="sellersStack" />
        <StyledTextH1>{sellerList[index_seller].name}</StyledTextH1>
        <StyledTextP>Adicione uma nova lista</StyledTextP>
        <InputAddItem
          placeholder="Nome da lista"
          onChangeText={setListName}
          value={listName}
          onPress={newList}
        />
      </StyledContainerHeader>

      <StyledContainerBody>
        <StyledTextH3>Listas cadastradas</StyledTextH3>

        {sellerList[index_seller].listsystem_set?.map((list, i) => (
          <ViewSellerList
            key={list.id}
            action={() => goToMilkList(i)}
            icon="list"
          >
            {list.name}
          </ViewSellerList>
        ))}
      </StyledContainerBody>
    </StyledSellerList>
  );
}

export default SellerList;

const StyledSellerList = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

const StyledContainerHeader = styled.View`
  width: 100%;
  padding: 16px;
  padding-bottom: 0px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
`;

const StyledContainerBody = styled.View`
  padding: 16px;
`;

const StyledTextH1 = styled.Text`
  font-size: 24px;
  margin-top: 24px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLUE_800};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;

const StyledTextP = styled(StyledTextH1)`
  font-size: 16px;
  margin-top: 0px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

const StyledTextH3 = styled(StyledTextH1)`
  font-size: 16px;
  text-align: left;
  margin-top: -16px;
  margin-bottom: 4px;
`;
