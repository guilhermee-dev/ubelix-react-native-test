import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 16px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;
