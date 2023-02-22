import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

const Login = () => {
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
      <button type="button">Enviar</button>
    </Container>
  );
};

export default Login;
