import React from 'react';

import {
  Container,
  Description,
  StatisticsCardStyleProps,
  Title,
} from './styles';

type Props = StatisticsCardStyleProps & {
  title: number;
  description: string;
};

export function StatisticsCard({ title, description, width, color }: Props) {
  return (
    <Container width={width} color={color}>
      <Title>{title}</Title>

      <Description>{description}</Description>
    </Container>
  );
}
