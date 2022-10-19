import PhotoImg from '@assets/Ellipse.png';
import LogoImg from '@assets/Logo.png';
import React from 'react';

import { Container, Logo, Photo } from './styles';

export function HomeHeader() {
  return (
    <Container>
      <Logo source={LogoImg} />

      <Photo source={PhotoImg} />
    </Container>
  );
}
