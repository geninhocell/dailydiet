import styled, { css } from 'styled-components/native';

export type MeanInsideCardStylesProps = {
  inside: boolean;
};

export const Container = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  padding: 8px 16px;
  margin-top: 24px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Circle = styled.View<MeanInsideCardStylesProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  ${({ theme, inside }) => css`
    background-color: ${inside
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
