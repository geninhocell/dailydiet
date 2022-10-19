import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_700};
    border: 1px solid
      ${type === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  size: 18,
}))`
  margin-right: 14px;
`;
