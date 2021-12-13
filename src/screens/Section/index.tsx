import {
  NavigationProp,
  ParamListBase,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackwardButton } from "../../components/BackwardButton";
import { Book } from "../../components/Book";
import { BookCategorySelected } from "../../utils/BookCategorySelected";
import { api } from "../../services/api";

import { Container, Header, Title, BooksFinded } from "./styles";

interface CategorySelected {
  list_name_encoded: string;
  category: string;
  search?: string;
}

export function Section() {
  const theme = useTheme();
  const routes = useRoute();
  const { list_name_encoded, category } = routes.params as CategorySelected;
  const [books, setBooks] = useState({} as BookCategorySelected);
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    async function getBooks() {
      try {
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`;
        const response = await api.get(url);
        setBooks(response.data);
      } catch (error) {
        Alert.alert(
          "Erro",
          "Não foi possivel encontrar livros dessa categorias, tente novamente"
        );
        goBack();
      }
    }
    getBooks();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackwardButton onPress={() => {}} />
        <Title>{category}</Title>
      </Header>

      {!books?.results?.books[0] ? (
        <ActivityIndicator
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          color={theme.colors.primary}
        />
      ) : (
        <ScrollView>
          <BooksFinded>
            {books?.results?.books?.map((item, index) => (
              <Book
                title={item.title}
                author={item.author}
                bookImageUrl={item.book_image}
                description={item.description}
                link={item.amazon_product_url}
                key={item.title + index}
              />
            ))}
          </BooksFinded>
        </ScrollView>
      )}
    </Container>
  );
}
