import React, { useState } from "react";
import { ActivityIndicator, Alert, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import { BooksSlider } from "../../components/BooksSlider";
import { Category } from "../../components/Category";
import { Search } from "../../components/Search";

import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Avatar,
  ImageProfile,
  FormSeach,
  Navigation,
} from "./styles";
import { useTheme } from "styled-components";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useBooks } from "../../hooks/useBooks";

export function Home() {
  const { booksData, handleSearchBooks } = useBooks();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleSearch() {
    setIsLoading(true);
    try {
      handleSearchBooks(search);
      navigate("Search");
      setSearch("");
    } catch (error) {
      Alert.alert("Opa", "Não foi possivel buscar nos livros");
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>Bookshelf</Title>
        <Avatar>
          <ImageProfile
            source={{
              uri: "https://avatars.githubusercontent.com/u/68303458?v=4",
            }}
          />
        </Avatar>
      </Header>
      <FormSeach>
        <Search
          click={handleSearch}
          placeholder="Qual livro você gostaria de ler hoje?"
          value={search}
          onChangeText={setSearch}
          loading={isLoading}
        />
      </FormSeach>
      {!booksData?.results ? (
        <ActivityIndicator
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          color={theme.colors.primary}
        />
      ) : (
        <Animated.ScrollView
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        >
          <BooksSlider title="Para você" lists={booksData?.results?.lists[0]} />

          <Category />
          <BooksSlider
            title="Os mais lidos da semana"
            lists={booksData?.results?.lists[7]}
          />
        </Animated.ScrollView>
      )}
      <Navigation>
        <Feather name="home" size={24} color={theme.colors.primary} />
      </Navigation>
    </Container>
  );
}
