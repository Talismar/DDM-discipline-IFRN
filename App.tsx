import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import AuthProvider from "./src/context/auth";
import { API } from "./src/services/api";
import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import Loading from "@components/Loading";
import Routes from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import CoreProvider from "./src/context/ContextSystem";
interface ISeller {
  id: number;
  name: string;
}

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_600SemiBold,
  });
  const [users, setUsers] = React.useState<ISeller[]>();

  React.useEffect(() => {
    // API.get_seller_list().then((res) => setUsers(res.data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        backgroundColor={theme.COLORS.YELLOW_700}
        translucent={false}
      />

      {fontLoaded ? (
        <NavigationContainer>
          <AuthProvider>
            <CoreProvider>
              <Routes />
            </CoreProvider>
          </AuthProvider>
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}
