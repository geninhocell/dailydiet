import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type MealStyleProps = {
  inside: boolean;
};

export const Container = styled(SafeAreaView)<MealStyleProps>`
  flex: 1;
  background-color: ${({ theme, inside }) =>
    inside ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContent = styled(SafeAreaView)`
  padding: 0 24px 24px 24px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  margin-top: 40px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const DateHourLabel = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DateHour = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ButtonsFooter = styled.ScrollView``;

export const ButtonsSeparator = styled.View`
  height: 8px;
`;
