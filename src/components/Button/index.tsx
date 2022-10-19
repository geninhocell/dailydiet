import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, ButtonTypeStyleProps, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {!!icon && <Icon type={type} name={icon} />}

      <Title type={type}>{title}</Title>
    </Container>
  );
}
