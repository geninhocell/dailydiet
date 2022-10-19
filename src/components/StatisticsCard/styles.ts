import styled, { css } from 'styled-components/native';

export type StatisticsCardStyleProps = {
  width?: 'full';
  color?: string;
};

export const Container = styled.View<StatisticsCardStyleProps>`
  width: ${({ width }) => (width === 'full' ? '100%' : '48%')};
  background-color: ${({ theme, color }) =>
    color ? color : theme.COLORS.GRAY_600};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['3XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
