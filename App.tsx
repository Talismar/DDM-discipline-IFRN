/* Components de loading */
// import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import Login from "@screens/Login";
import NewTask from "@screens/NewTask";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@components/Loading";

export default function App() {
  /* Carregar font em toda aplicação */
  /* Carregamento assicromo */
  /* fontLoaded - Indica se a font ja foi carregada */
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <NewTask /> : <Loading />}
      <StatusBar style="light" backgroundColor="#1DB863" translucent={false} />
    </ThemeProvider>
  );
}
