import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackwardButton } from "../../components/BackwardButton";
import { Book } from "../../components/Book";
import { useBooks } from "../../hooks/useBooks";

import { Container, Header, Title, BooksFinded } from "./styles";

export function Search() {
  const theme = useTheme();
  const { booksFiltered } = useBooks();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackwardButton onPress={() => {}} />
        <Title>{booksFiltered?.length} resultados</Title>
      </Header>

      {!booksFiltered ? (
        <ActivityIndicator
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          color={theme.colors.primary}
        />
      ) : (
        <ScrollView>
          <BooksFinded>
            {booksFiltered.map((item, index) => (
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
