import { BorderlessButton, TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 4px;
  align-items: center;
  padding: 0 16px;

  margin-top: 16px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
`;

export const SearchData = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 24px;
`;
