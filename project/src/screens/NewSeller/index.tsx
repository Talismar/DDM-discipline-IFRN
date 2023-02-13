import React from "react";
import { ScrollView, View } from "react-native";
import { User } from "phosphor-react-native";
import styled from "styled-components/native";
import { StyledContainer } from "@screens/Home";
import CustomInput from "@components/CustomInput";
import CustomButton from "@components/CustomButton";
import Header from "@components/Header";
import { API } from "../../services/api";
import { CoreContext } from "../../context/ContextSystem";

const NewSeller: React.FC = (props) => {
  const [nameSeller, setNameSeller] = React.useState("");
  const { setSellerList, sellerList } = React.useContext(CoreContext);

  function newSeller() {
    API.post_seller({
      name: nameSeller,
    }).then((res) => {
      setSellerList([
        ...sellerList,
        {
          id: res.data.id,
          name: res.data.name,
          listsystem_set: [],
        },
      ]);
      setNameSeller("");
    });
  }

  return (
    <ScrollView>
      <StyledNewSeller>
        <Header showBackButton screenName="sellersStack" />

        <UserIcon />

        <StyledTextH1>Novo Vendedor</StyledTextH1>
        <StyledTextH3>
          Crie um novo vendedor para adicionar listas{" "}
          {/* {JSON.stringify(sellerList)} */}
        </StyledTextH3>

        <StyledInput
          placeholder="Nome do vendedor"
          onChangeText={(v) => setNameSeller(v)}
          value={nameSeller}
        />
        <CustomButton onPress={newSeller}>Criar</CustomButton>
      </StyledNewSeller>
    </ScrollView>
  );
};

export default NewSeller;

const StyledNewSeller = styled(StyledContainer)`
  justify-content: flex-start;
  padding-bottom: 0px;
`;

const StyledInput = styled(CustomInput)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  margin-top: 73px;
`;

const UserIcon = styled(User).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 90,
  weight: "bold",
}))`
  margin-bottom: 24px;
  margin-top: 93px;
`;

const StyledTextH1 = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

const StyledTextH3 = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  width: 240px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLUE_800};
`;
