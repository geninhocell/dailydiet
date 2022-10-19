import React from 'react';

import { Circle, Container, MeanInsideCardStylesProps, Title } from './styles';

type Props = MeanInsideCardStylesProps & object;

export function MeanInsideCard({ inside }: Props) {
  return (
    <Container>
      <Circle inside={inside} />

      <Title>{inside ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  );
}
