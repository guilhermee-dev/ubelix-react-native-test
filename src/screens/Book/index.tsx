import React from "react";
import { Alert, Linking, StatusBar, Image } from "react-native";
import { BackwardButton } from "../../components/BackwardButton";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  Actions,
  Content,
  BookInfo,
  BookImage,
  BookDetails,
  Title,
  Author,
  ContainerStars,
  Stars,
  Assessment,
  CategoryContainer,
  CategoryName,
  BookAbout,
  About,
  AboutTitle,
  TargetReadBook,
  ButtonText,
} from "./styles";
import { useTheme } from "styled-components";
import { useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  author: string;
  bookImageUrl: string;
  description: string;
  link: string;
}
export function Book() {
  const theme = useTheme();
  const routes = useRoute();
  const { title, author, bookImageUrl, description, link } =
    routes.params as Params;

  async function handleBuyBook() {
    try {
      await Linking.openURL(link);
      return;
    } catch (error) {
      Alert.alert(
        "Ops!",
        "Não foi possivel abrir o link para comprar o livro."
      );
      return;
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackwardButton />
        <Actions>
          <Feather
            name="heart"
            size={24}
            color={theme.colors.gray_100}
            onPress={() => {}}
          />
          <Feather
            name="share-2"
            size={24}
            color={theme.colors.gray_100}
            style={{ marginLeft: 16 }}
            onPress={() => {}}
          />
        </Actions>
      </Header>

      <Content>
        <BookInfo>
          <BookImage
            source={{
              uri: bookImageUrl,
            }}
          />
          <BookDetails>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <ContainerStars>
              <Stars>
                <Image  source={require('../../assets/Star.png')}/>
                <Image  source={require('../../assets/Star.png')}/>
                <Image  source={require('../../assets/Star.png')}/>
                <Feather name="star" size={10} color={theme.colors.gray_100} />
                <Feather name="star" size={10} color={theme.colors.gray_100} />
              </Stars>
              <Assessment>20 Avaliações</Assessment>
            </ContainerStars>
            <CategoryContainer>
              <CategoryName>Não Ficção</CategoryName>
              <CategoryName>Literatura estrangeira</CategoryName>
            </CategoryContainer>
          </BookDetails>
        </BookInfo>
        <BookAbout>
          <AboutTitle>Sobre esse livro</AboutTitle>
          <About>{description}</About>
        </BookAbout>
      </Content>
      <TargetReadBook onPress={handleBuyBook}>
        <ButtonText>Ler agora</ButtonText>
      </TargetReadBook>
    </Container>
  );
}
