import { StyledTextTitle } from "@components/FontStyles/Titles";
import Header from "@components/Header";
import { StyledContainer } from "@screens/Home";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import photo from "@assets/My_Avatar.png";

import styled from "styled-components/native";
import CustomInput from "@components/CustomInput";
import { API } from "../../services/api";
import { useIsFocused } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../context/auth";

interface IChangePassword {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

const Settings: React.FC = () => {
  const isFocused = useIsFocused();
  const [pricePerLiter, setPricePerLiter] = React.useState<string>();
  const [changePassword, setChangePassword] = React.useState<IChangePassword>(
    {} as IChangePassword
  );
  const { user, setUser } = React.useContext(AuthContext);
  const [image, setImage] = useState("");

  function updatePhotoProfile(img: string) {
    // console.log(user.id, image);
    API.put_user(user.id, {
      name: user.name,
      email: user.email,
      password: user.password,
      photo: img,
    }).then((res) => {
      console.log(res.data);
    });
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result.assets);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setUser({ ...user, photo: result.assets[0].uri });
      updatePhotoProfile(result.assets[0].uri);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getSystemSettingsData();
    }
  }, [isFocused]);

  function getSystemSettingsData() {
    API.get_system_settings().then((res) => {
      setPricePerLiter(res.data[0].price_per_liter);
    });
  }

  function updatePricePerLiter() {
    console.log(typeof pricePerLiter);
    if (typeof pricePerLiter === "string") {
      API.put_system_settings({
        id: 1,
        price_per_liter: parseFloat(pricePerLiter),
      })
        .then((res) => {
          console.log(res.data);
          getSystemSettingsData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function updatePassword() {
    if (user.password === changePassword.old_password) {
      if (changePassword.new_password === changePassword.confirm_password) {
        API.put_user(user.id, {
          email: user.email,
          name: user.name,
          photo: user.photo,
          password: changePassword.new_password,
        }).then((res) => {
          setChangePassword({} as IChangePassword);
        });
      }
    }
  }

  return (
    <StyledSettings>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={{ marginTop: 16 }}>
          <StyledTextTitle fontSize="LG" textAlign="left">
            Configurações do usuário
          </StyledTextTitle>

          <StyledContainerUser>
            <StyledAlterPhoto>
              {image ? (
                <StyledPhoto source={{ uri: image }} />
              ) : (
                <StyledPhoto
                  source={user.photo ? { uri: user.photo } : photo}
                />
              )}

              <TouchableOpacity onPress={pickImage}>
                <StyledButtonAlter>Alterar foto</StyledButtonAlter>
              </TouchableOpacity>
            </StyledAlterPhoto>

            <StyledTextTitle
              fontSize="LG"
              textAlign="left"
              style={{ marginTop: 22 }}
            >
              Alterar senha
            </StyledTextTitle>

            <StyledInput
              placeholder="Digite sua senha antiga"
              secureTextEntry
              onChangeText={(e) =>
                setChangePassword({ ...changePassword, old_password: e })
              }
              value={changePassword.old_password}
            />
            <StyledInput
              placeholder="Digite a nova senha"
              secureTextEntry
              onChangeText={(e) =>
                setChangePassword({ ...changePassword, new_password: e })
              }
              value={changePassword.new_password}
            />
            <StyledInput
              placeholder="Repita nova senha"
              secureTextEntry
              onChangeText={(e) =>
                setChangePassword({ ...changePassword, confirm_password: e })
              }
              value={changePassword.confirm_password}
            />

            <TouchableOpacity onPress={updatePassword}>
              <StyledButtonSave>Save</StyledButtonSave>
            </TouchableOpacity>
          </StyledContainerUser>
        </View>

        <View style={{ marginTop: 16 }}>
          <StyledTextTitle fontSize="LG" textAlign="left">
            Configurações do sistema
          </StyledTextTitle>

          <StyledContainerSystem>
            <StyledInput
              placeholder="Preço de compra do leite"
              keyboardType="numeric"
              value={pricePerLiter?.toString()}
              onChangeText={(e) => setPricePerLiter(e)}
            />
            <TouchableOpacity onPress={updatePricePerLiter}>
              <StyledButtonSave>Save</StyledButtonSave>
            </TouchableOpacity>
          </StyledContainerSystem>
        </View>
      </ScrollView>
    </StyledSettings>
  );
};

export default Settings;

const StyledSettings = styled(StyledContainer)``;

const StyledContainerUser = styled.View`
  background-color: rgba(5, 5, 5, 0.15);
  width: 100%;
  padding: 16px;
  border-radius: 8px;
`;

const StyledContainerSystem = styled(StyledContainerUser)``;

const StyledInput = styled(CustomInput)`
  margin-bottom: 12px;
`;

const StyledPhoto = styled.Image`
  height: 86px;
  width: 86px;
  border-radius: 50px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledAlterPhoto = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const StyledButtonAlter = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  padding: 3px 16px;
  border-radius: 4px;
  margin-left: 16px;
`;

const StyledButtonSave = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE_700};
`;
