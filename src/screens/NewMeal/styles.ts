import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const HeaderContent = styled(SafeAreaView)`
  padding: 0 24px;
`;

export const Form = styled.ScrollView`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: 24px;
  padding: 16px 24px 0 24px;
`;

export const FormHorizontal = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
