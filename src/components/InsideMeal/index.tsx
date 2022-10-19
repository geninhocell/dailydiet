import { InsideMealCard } from '@components/InsideMealCard';
import React from 'react';

import { CardsContainer, Container, Title } from './styles';

export type InsideMealResult = 'void' | 'true' | 'false';

type Props = {
  onResult: (result: InsideMealResult) => void;
  result?: InsideMealResult;
};

export function InsideMeal({ onResult, result = 'void' }: Props) {
  return (
    <Container>
      <Title>Está dentro da dieta?</Title>

      <CardsContainer>
        <InsideMealCard
          selected={result !== 'void' && result === 'true'}
          type="yes"
          onPress={() => onResult('true')}
        />

        <InsideMealCard
          selected={result !== 'void' && result === 'false'}
          type="no"
          onPress={() => onResult('false')}
        />
      </CardsContainer>
    </Container>
  );
}
