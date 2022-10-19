import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Circle, Container, InsideMealCardStyleProps, Title } from './styles';

type Props = TouchableOpacityProps & InsideMealCardStyleProps & object;

export function InsideMealCard({
  type = 'yes',
  selected = false,
  ...rest
}: Props) {
  return (
    <Container type={type} selected={selected} {...rest}>
      <Circle type={type} />

      {type === 'yes' ? <Title>Sim</Title> : <Title>Não</Title>}
    </Container>
  );
}
