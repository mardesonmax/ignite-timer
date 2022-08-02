import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './styles';

export const DefaultLayout: React.FC = () => (
  <Container>
    <Outlet />
  </Container>
);
