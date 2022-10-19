import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type CreateMeanDoneStyleProps = {
  inside_the_diet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<CreateMeanDoneStyleProps>`
  margin-bottom: 8px;
  ${({ theme, inside_the_diet }) => css`
    font-size: ${theme.FONT_SIZE['2XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${inside_the_diet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SubTitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: '#000';
  `}
`;

export const Illustration = styled.Image`
  margin: 40px 0 32px 0;
`;
