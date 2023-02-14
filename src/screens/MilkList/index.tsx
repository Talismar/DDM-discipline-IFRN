import Header from "@components/Header";
import InputAddItem from "@components/InputAddItem";
import ViewSellerList from "@components/ViewSellerList";
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";
import React from "react";
import { CoreContext } from "../../context/ContextSystem";
import styled from "styled-components/native";
import { API } from "../../services/api";
import { useIsFocused } from "@react-navigation/native";

type RouteParams = {
  index_list: number;
  index_seller: number;
};

function MilkList() {
  const { sellerList, fetchSellerList } = React.useContext(CoreContext);
  const route = useRoute();
  const { index_list, index_seller } = route.params as RouteParams;
  const [inputTotalMilk, setInputTotalMilk] = React.useState("");
  const [totalLiters, setTotalLiters] = React.useState(0);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    let count = 0;

    sellerList[index_seller]?.listsystem_set[index_list].purchase_set?.map(
      (v) => {
        count += v.amount_of_liters ? parseInt(v?.amount_of_liters) : 0;
      }
    );

    setTotalLiters(count);
  }, [isFocused, sellerList]);

  function newPurchase() {
    if (parseInt(inputTotalMilk) > 0) {
      API.post_newPurchaseIntoList({
        amount_of_liters: inputTotalMilk,
        name_list: sellerList[index_seller].listsystem_set[index_list]
          .id as number,
      }).then(() => {
        console.log("Purchase");
        fetchSellerList();
        setInputTotalMilk("");
      });
    }
  }

  return (
    <StyledSellerList>
      <StyledContainerHeader>
        <Header showBackButton screenName="sellerList" params={index_seller} />
        <StyledTextH1>
          {sellerList[index_seller]?.listsystem_set[index_list].name}
        </StyledTextH1>
        <StyledTextP>Adicione uma nova anotação</StyledTextP>
        <InputAddItem
          keyboardType="numeric"
          placeholder="Quantidade de leite"
          onChangeText={setInputTotalMilk}
          value={inputTotalMilk}
          onPress={newPurchase}
        />
      </StyledContainerHeader>

      <StyledContainerBody>
        <StyledTextH3>Anotações registradas</StyledTextH3>

        {sellerList[index_seller]?.listsystem_set[index_list].purchase_set?.map(
          (purc) => (
            <ViewSellerList key={purc.id} icon="edit">
              {purc.amount_of_liters?.split(".")[0]} litros
            </ViewSellerList>
          )
        )}
      </StyledContainerBody>

      <StyledFooterList>
        <StyledTextH3>Total de litros</StyledTextH3>
        <StyledTotalLitersMilk>{totalLiters} litros</StyledTotalLitersMilk>
      </StyledFooterList>
    </StyledSellerList>
  );
}

export default MilkList;

const StyledSellerList = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  justify-content: space-between;
  padding-bottom: 16px;
`;

const StyledContainerHeader = styled.View`
  width: 100%;
  padding: 16px;
  padding-bottom: 0px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
`;

const StyledContainerBody = styled.View`
  padding: 16px;
  flex: 1;
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

const StyledFooterList = styled.View`
  padding: 16px;
`;

const StyledTotalLitersMilk = styled.Text`
  padding: 16px 8px;
  background-color: #fff;
  border-radius: 6px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #303030;
`;
