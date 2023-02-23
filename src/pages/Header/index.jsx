/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectButtonClick } from '../../store/modules/selectors';

import { Nav } from './styled';

const Header = () => {
  const botaoClicado = useSelector(selectButtonClick);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'clicado' : 'não clicado'}
    </Nav>
  );
};

export default Header;
