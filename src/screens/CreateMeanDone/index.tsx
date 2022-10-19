import IllustrationBad from '@assets/Illustration-bad.png';
import IllustrationGood from '@assets/Illustration-good.png';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';

import {
  Container,
  Illustration,
  SubTitle,
  SubTitleBold,
  Title,
} from './styles';

type RouteParams = {
  inside_the_diet: boolean;
};

export function CreateMeanDone() {
  const navigation = useNavigation();
  const route = useRoute();

  const { inside_the_diet } = route.params as RouteParams;

  function handleNavToHome() {
    navigation.navigate('home');
  }

  const infos = useMemo(() => {
    if (inside_the_diet) {
      return {
        title: 'Continue assim!',
        subtitle_one: 'Você continua ',
        subtitle_bold: 'dentro da dieta',
        subtitle_two: '. Muito bem!',
      };
    } else {
      return {
        title: 'Que pena!',
        subtitle_one: 'Você ',
        subtitle_bold: 'saiu da dieta',
        subtitle_two: ' dessa vez, mas continue se esforçando e não desista!',
      };
    }
  }, [inside_the_diet]);

  return (
    <Container>
      <Title inside_the_diet={inside_the_diet}>{infos.title}</Title>

      <SubTitle>
        {infos.subtitle_one} <SubTitleBold>{infos.subtitle_bold}</SubTitleBold>{' '}
        {infos.subtitle_two}
      </SubTitle>

      {inside_the_diet ? (
        <Illustration source={IllustrationGood} />
      ) : (
        <Illustration source={IllustrationBad} />
      )}

      <Button title="Ir para página inicial" onPress={handleNavToHome} />
    </Container>
  );
}
