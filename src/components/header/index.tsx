import React from 'react';

import { Scroll, Timer } from 'phosphor-react';

import { Container } from './styles';

import logoIgnite from '../../assets/logo-ignite.svg';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoIgnite} alt='Logo Ignite' />

      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  );
};
