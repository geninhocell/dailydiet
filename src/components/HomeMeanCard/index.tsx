import { MeanStorageDTO } from '@storage/mean/MeanStorageDTO';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Division,
  Hour,
  HourNameContainer,
  Low,
  Name,
} from './styles';

type Props = TouchableOpacityProps & {
  data: MeanStorageDTO;
};

export function HomeMeanCard({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <HourNameContainer>
        <Hour>{data.hour}</Hour>

        <Division />

        <Name>{data.name}</Name>
      </HourNameContainer>

      <Low low={data.inside_the_diet} />
    </Container>
  );
}
