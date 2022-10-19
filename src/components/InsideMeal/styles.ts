import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  margin: 24px 0 100px 0;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
