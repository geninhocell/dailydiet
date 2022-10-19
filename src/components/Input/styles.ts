import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InputStyleProps = {
  width?: 'full' | 'middle';
  multi?: boolean;
};

export const Container = styled.View<InputStyleProps>`
  width: ${({ width }) => (width === 'full' ? '100%' : '48%')};
  margin-top: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const InputContainer = styled(TextInput)<InputStyleProps>`
  flex: 1;

  ${({ theme, multi }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    background-color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_500};
    min-height: ${multi ? '120px' : '48px'};
    max-height: ${multi ? '120px' : '48px'};
  `}
  border-radius: 6px;
  padding: 16px;
`;
