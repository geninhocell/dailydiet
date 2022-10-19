import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button, Container, Icon, SpaceEmpty, Title } from './styles';

type Props = {
  title?: string;
};

export function Header({ title }: Props) {
  const navigation = useNavigation();

  function handleNavToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Button onPress={handleNavToHome}>
        <Icon name="arrow-back" />
      </Button>

      {!!title && <Title>{title}</Title>}

      <SpaceEmpty />
    </Container>
  );
}
