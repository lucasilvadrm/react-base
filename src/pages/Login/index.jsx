/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exampleActions.clicaBotao());
  };

  return (
    <Container>
      <Title>
        Login
        {' - '}
        <small>Tela de login</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        explicabo.
      </Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};

export default Login;
