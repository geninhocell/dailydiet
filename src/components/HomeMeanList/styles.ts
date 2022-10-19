import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 32px 0 0 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SeparatorItem = styled.View`
  margin-bottom: 8px;
`;

export const SeparatorSection = styled.View`
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  height: 100px;
`;
