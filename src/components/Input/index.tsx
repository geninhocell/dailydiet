import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, InputContainer, InputStyleProps, Title } from './styles';

type Props = TextInputProps &
  InputStyleProps & {
    inputRef?: React.RefObject<TextInput>;
    label?: string;
    multi?: boolean;
  };

export function Input({
  inputRef,
  label,
  multi = false,
  width = 'full',
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <Container width={width}>
      {!!label && <Title>{label}</Title>}
      <InputContainer
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        multiline={multi}
        multi={multi}
        style={{ textAlignVertical: 'top' }}
        {...rest}
      />
    </Container>
  );
}
