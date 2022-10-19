import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Description, Icon, Percent } from './styles';

type Props = TouchableOpacityProps & {
  percent: number;
  description: string;
  icon?: boolean;
};

export function PercentMeal({
  percent,
  description,
  icon = false,
  ...rest
}: Props) {
  return (
    <Container low={percent < 30} {...rest}>
      {icon && <Icon />}

      <Percent>{percent}%</Percent>

      <Description>{description}</Description>
    </Container>
  );
}
