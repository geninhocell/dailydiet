import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type PercentMealStyleProps = {
  low: boolean;
};

export const Container = styled(TouchableOpacity)<PercentMealStyleProps>`
  width: 100%;
  height: 102px;
  background-color: ${({ theme, low }) =>
    low ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
  align-items: center;
  border-radius: 8px;
  padding: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  align-self: flex-end;
`;

export const Percent = styled.Text`
  ${({ theme }) =>
    css`
      font-size: ${theme.FONT_SIZE['3XL']}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_100};
    `};
`;

export const Description = styled.Text`
  ${({ theme }) =>
    css`
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_200};
    `};
`;
