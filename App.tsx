import { useFonts } from "expo-font";
import React from "react";
import {
  Lato_900Black,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { AppBooksProvider } from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AppBooksProvider>
          <Routes />
        </AppBooksProvider>
      </ThemeProvider>
    );
  }
}
