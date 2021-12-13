import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
  width: 100%;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  flex-direction: row;
  align-items: center;

  margin-top: ${getStatusBarHeight()}px;
  padding: 0 16px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.black};
  line-height: ${RFValue(32)}px;
  margin-left: 16px;
`;

export const BooksFinded = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 16px;
`;
