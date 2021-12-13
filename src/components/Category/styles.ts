import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const CategoryWrapper = styled.TouchableOpacity`
  width: 74px;
  margin-right: 12px;
`;

export const CategoryImage = styled.View`
  height: 74px;
  width: 74px;
  background-color: ${({ theme }) => theme.colors.purple_100};
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const CategoryImageTwo = styled.View`
  height: 74px;
  width: 74px;
  background-color: ${({ theme }) => theme.colors.orange_100};
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray_100};
`;
