import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type StatisticsStylesProps = {
  inside: boolean;
};

export const Container = styled(SafeAreaView)<StatisticsStylesProps>`
  flex: 1;
  background-color: ${({ theme, inside }) =>
    inside ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContent = styled(SafeAreaView)`
  padding: 0 24px;
`;

export const Content = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 32px 24px 0 24px;
  height: 100%;
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CardsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
