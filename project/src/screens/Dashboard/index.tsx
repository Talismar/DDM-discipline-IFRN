import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from "react-native";

import styled from "styled-components/native";
import { useContext } from "react";
import { StyledContainer } from "@screens/Home";
import logo from "@assets/candeiaLogo2.png";
import photo from "@assets/My_Avatar.png";
import { API } from "../../services/api";
import { AuthContext } from "../../context/auth";
import { CoreContext } from "../../context/ContextSystem";
import { StyledTextTitle } from "@components/FontStyles/Titles";
import { useNavigation } from "@react-navigation/native";

interface ISellerList {
  id: number;
  name: string;
  listsystem_set: {
    id?: number;
    name?: string;
    seller?: number;
    purchase_set?: {
      id?: number;
      amount_of_liters?: string;
      name_list?: number;
    }[];
  }[];
}

import { useIsFocused } from "@react-navigation/native";
const Dashboard: React.FC = () => {
  const isFocused = useIsFocused();
  const { logout, user } = useContext(AuthContext);
  const { systemPrice, fetchSystemSettings } = useContext(CoreContext);
  const [sellerList, setSellerList] = React.useState([] as ISellerList[]);
  const [totalPurchaseAmount, setTotalPurchaseAmount] = React.useState("0");

  // Logout
  function goToLogin() {
    logout();
  }

  function add(accumulator: any, a: any) {
    return parseInt(accumulator) + parseInt(a.amount_of_liters);
  }

  React.useEffect(() => {
    fetchSystemSettings();

    if (isFocused) {
      let count = 0;
      API.get_seller_list().then((res) => {
        setSellerList(res.data);
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          if (
            element.listsystem_set.slice(-1)[0]?.purchase_set.reduce(add, 0)
          ) {
            count += element.listsystem_set
              .slice(-1)[0]
              ?.purchase_set.reduce(add, 0);
          }
        }

        setTotalPurchaseAmount((count * systemPrice).toFixed(2));
      });
    }
  }, [isFocused, systemPrice]);

  return (
    <ScrollView>
      <StyledContainer style={{ paddingBottom: 16 }}>
        <StyledHeader>
          <Image source={logo} />
          <TouchableOpacity onPress={goToLogin}>
            <StyledButtonClose>Sair</StyledButtonClose>
          </TouchableOpacity>
        </StyledHeader>

        <StyledViewPhotoText>
          <StyledPhoto source={user.photo ? { uri: user.photo } : photo} />
          <StyledTextTitle fontSize="MD">Bem vindo {user.name}</StyledTextTitle>
        </StyledViewPhotoText>

        <StyledContainer2>
          <StyledTextTitle textAlign="left" fontSize="XL">
            Gerenciei a sua compra de leite
          </StyledTextTitle>

          <StyledTotalEmployees>
            <StyledTextP>Total de vendedores</StyledTextP>
            <Text style={styles.textValue}>{sellerList.length}</Text>
          </StyledTotalEmployees>
          <StyledTotalPurchase>
            <StyledTextP>Valor total de compras</StyledTextP>
            <Text style={styles.textValue}>{totalPurchaseAmount}</Text>
          </StyledTotalPurchase>
        </StyledContainer2>

        <StylesTableData>
          <StyledHeaderTable>
            <Text style={styles.textTableHeader}>Vendedores</Text>
            <Text style={styles.textTableHeader}>Total à pagar</Text>
          </StyledHeaderTable>

          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
            {sellerList.map((seller, index) =>
              index % 2 === 0 ? (
                <StyledBodyTableEven key={index}>
                  <Text>{seller.name}</Text>
                  <Text>
                    {seller.listsystem_set
                      .slice(-1)[0]
                      ?.purchase_set?.reduce(add, 0) &&
                      (
                        (seller.listsystem_set
                          .slice(-1)[0]
                          ?.purchase_set?.reduce(add, 0) as number) *
                        systemPrice
                      ).toFixed(2)}
                  </Text>
                </StyledBodyTableEven>
              ) : (
                <StyledBodyTableOdd key={index}>
                  <Text>{seller.name}</Text>
                  <Text>
                    {seller.listsystem_set
                      .slice(-1)[0]
                      ?.purchase_set?.reduce(add, 0) &&
                      (
                        (seller.listsystem_set
                          .slice(-1)[0]
                          ?.purchase_set?.reduce(add, 0) as number) *
                        systemPrice
                      ).toFixed(2)}
                  </Text>
                </StyledBodyTableOdd>
              )
            )}
          </ScrollView>
        </StylesTableData>
      </StyledContainer>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  textValue: {
    fontSize: 40,
    color: "#00111E",
    fontWeight: "600",
    textAlign: "center",
  },
  textTableHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00111E",
  },
});

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const StyledButtonClose = styled.Text`
  color: #d91b26;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;

const StyledViewPhotoText = styled.View`
  align-items: center;
  margin-top: 24px;
  margin-bottom: 48px;
`;

const StyledPhoto = styled.Image`
  height: 86px;
  width: 86px;
  border-radius: 50px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
`;

const StyledContainer2 = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const StyledTotalEmployees = styled.View`
  width: 47.5%;
  height: 105px;
  background-color: #d9e0e6;
  border-radius: 8px;
  margin-right: 16px;
`;

const StyledTotalPurchase = styled(StyledTotalEmployees)`
  background-color: #fdf8d9;
  margin-right: 0px;
`;

const StyledTextP = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_800};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: 12px;
  margin: 8px;
`;

const StylesTableData = styled.View`
  width: 100%;
  height: 274px;
  background-color: #fbf0b0;
  border-radius: 8px;
`;

const StyledHeaderTable = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
`;

const StyledBodyTableEven = styled(StyledHeaderTable)`
  background-color: rgba(94, 106, 116, 0.3);
`;

const StyledBodyTableOdd = styled(StyledHeaderTable)``;
