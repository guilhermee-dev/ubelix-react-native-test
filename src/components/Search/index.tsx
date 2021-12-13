import React from "react";
import { Container, InputText, SearchData } from "./styles";
import { useTheme } from "styled-components";
import { ActivityIndicator, TextInputProps, Image } from "react-native";

interface SearchProps extends TextInputProps {
  click: () => void;
  loading?: boolean;
}

export function Search({ click, loading = false, ...rest }: SearchProps) {
  const theme = useTheme();
  return (
    <Container>
      <InputText {...rest} />

      {loading ? (
        <ActivityIndicator
          size={24}
          style={{
            padding: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <SearchData onPress={click}>
          <Image  
            source={require('../../assets/Shape.png')}
          />
        </SearchData>
      )}
    </Container>
  );
}
