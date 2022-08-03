import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';

import { Container } from './styles';

export const DefaultLayout: React.FC = () => (
  <Container>
    <div className='content'>
      <Header />

      <Outlet />
    </div>
  </Container>
);
