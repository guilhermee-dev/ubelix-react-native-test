import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BookCategory } from "../../utils/BookCategory";
import { api } from "../../services/api";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import {
  CategoryWrapper,
  CategoryImage,
  CategoryImageTwo,
  CategoryName,
  Container,
  Header,
  Title,
} from "./styles";

interface CategorySelected {
  list_name_encoded: string;
  display_name: string;
}

export function Category() {
  const [category, setCategory] = useState<BookCategory>({} as BookCategory);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleCategorySelected(item: CategorySelected) {
    navigate("Section", {
      category: item.display_name,
      list_name_encoded: item.list_name_encoded,
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.get(
          "/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
        );
        setCategory(data.data);
      } catch (error) {
        Alert.alert("Opa", "Não foi possivel carregar as categorias");
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>
      {!category?.results ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={category.results}
          keyExtractor={(key, index) => key.display_name + index}
          renderItem={({ item }) => (
            <CategoryWrapper onPress={() => handleCategorySelected(item)}>
              {
                item.display_name === 'Combined Print & E-Book Fiction' ?
                <CategoryImageTwo /> : item.display_name === 'Hardcover Fiction' ?
                <CategoryImageTwo /> : <CategoryImage />
              }
              <CategoryName>{item.display_name}</CategoryName>
            </CategoryWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
