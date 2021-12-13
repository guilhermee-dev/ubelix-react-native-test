import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-right: 12px;
  margin-bottom: 24px;
  width: 104px;
  width: ${Dimensions.get("screen").width > 389 ? "104px" : "100px"};
`;

export const BookImage = styled.Image`
  width: 100%;
  height: 160px;
  margin-bottom: 4px;
  border-radius: 4px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_100};
  line-height: 16px;
`;

export const Author = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_200};
  line-height: 16px;
  margin-top: 2px;
`;
export const ContainerStars = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;
