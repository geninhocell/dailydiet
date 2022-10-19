import { Loading } from '@components/Loading';
import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
