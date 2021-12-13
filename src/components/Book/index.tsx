import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { Container, BookImage, Title, Author, ContainerStars } from "./styles";
import { useTheme } from "styled-components";

interface BookProps {
  title: string;
  author: string;
  bookImageUrl: string;
  description: string;
  link: string;
}

export function Book({
  title,
  author,
  bookImageUrl,
  description,
  link,
}: BookProps) {
  const theme = useTheme();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleSeeBook() {
    navigate("Book", {
      title,
      author,
      bookImageUrl,
      description: description,
      link,
    });
  }

  return (
    <Container onPress={handleSeeBook}>
      <BookImage
        source={{
          uri: bookImageUrl,
        }}
      />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <ContainerStars>
        <Image  source={require('../../assets/Star.png')}/>
        <Image  source={require('../../assets/Star.png')}/>
        <Image  source={require('../../assets/Star.png')}/>
        <Feather name="star" size={10} color={theme.colors.gray_100} />
        <Feather name="star" size={10} color={theme.colors.gray_100} />
      </ContainerStars>
    </Container>
  );
}
