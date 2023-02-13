import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import logoSmall from "@assets/logoSmall.png";
import styled from "styled-components/native";
import { StyledContainer } from "@screens/Home";
import ViewSeller from "@components/ViewSeller";
import ListEmpty from "@components/ListEmpty";
import CustomButton from "@components/CustomButton";
import { API } from "../../services/api";
import { StyledTextTitle } from "@components/FontStyles/Titles";
import { useNavigation } from "@react-navigation/native";
import { CoreContext } from "../../context/ContextSystem";

const Sellers: React.FC = () => {
  const navigation = useNavigation();
  const { setSellerList, sellerList } = React.useContext(CoreContext);

  React.useEffect(() => {
    API.get_seller_list().then((res) => {
      setSellerList(res.data);
    });
  }, []);

  function goToNewSeller() {
    navigation.navigate("newSeller");
  }

  function deleteSeller(index: number) {
    API.delete_seller(sellerList[index].id);
    setSellerList((prev) => prev.filter((seller, i) => i !== index));
  }

  return (
    <StyledContainerSellers>
      <StyledHeader>
        <Image source={logoSmall} />
        <StyledTextTitle fontSize="XL">Vendedores</StyledTextTitle>
      </StyledHeader>

      <View style={{ height: 370 }}>
        <FlatList
          data={sellerList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ViewSeller
              name={item.name}
              index={index}
              delete_seller={deleteSeller}
            />
          )}
          contentContainerStyle={sellerList.length === 0 ? { height: 80 } : {}}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar o primeiro vendedor?" />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <CustomButton variant="secondary" onPress={goToNewSeller}>
        Novo vendedor
      </CustomButton>
    </StyledContainerSellers>
  );
};

export default Sellers;

const StyledContainerSellers = styled(StyledContainer)`
  padding: 16px;
`;

const StyledHeader = styled.View`
  align-items: center;
`;
