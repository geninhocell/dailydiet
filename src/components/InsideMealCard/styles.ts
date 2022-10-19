import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InsideMealCardStyleProps = {
  type?: 'yes' | 'no';
  selected?: boolean;
};

export const Container = styled(TouchableOpacity)<InsideMealCardStyleProps>`
  width: 48%;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ theme, selected, type }) =>
    type === 'yes'
      ? css`
          background-color: ${selected
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.GRAY_600};
          ${selected && 'border: 1px solid ' + theme.COLORS.GREEN_DARK}
        `
      : css`
          background-color: ${selected
            ? theme.COLORS.RED_LIGHT
            : theme.COLORS.GRAY_600};
          ${selected && 'border: 1px solid ' + theme.COLORS.RED_DARK}
        `}
`;

export const Circle = styled.View<InsideMealCardStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  ${({ theme, type }) => css`
    background-color: ${type === 'yes'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
