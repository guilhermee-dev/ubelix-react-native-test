import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  flex-direction: row;
  align-items: center;

  margin-top: ${getStatusBarHeight()}px;
  padding: 0 16px;

  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.black};
  line-height: ${RFValue(32)}px;
`;
export const Avatar = styled.View`
  height: 32px;
  width: 32px;
`;
export const ImageProfile = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const FormSeach = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const Navigation = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
  margin-bottom: ${getBottomSpace() + 16}px;
`;
