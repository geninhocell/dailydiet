import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type HomeMeanCardStyleProps = {
  low?: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const HourNameContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Division = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 12px 0 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Low = styled.View<HomeMeanCardStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, low }) =>
    low ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
