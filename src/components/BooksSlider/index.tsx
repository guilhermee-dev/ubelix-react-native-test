import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { BookData } from "../../utils/BookData";
import { Book } from "../Book";

import { Container, Header, Title } from "./styles";

interface BooksSliderProps {
  title: string;
  lists: {
    list_name_encoded: string;
    display_name: string;
    books: {
      amazon_product_url: string;
      author: string;
      book_image: string;
      description: string;
      title: string;
    }[];
  };
}

export function BooksSlider({ title, lists }: BooksSliderProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      {!lists ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={lists.books}
          keyExtractor={(key, index) => `${key.title}${index}`}
          renderItem={({ item }) => (
            <Book
              title={item.title}
              author={item.author}
              bookImageUrl={item.book_image}
              description={item.description}
              link={item.amazon_product_url}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
