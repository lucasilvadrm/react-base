/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './pages/Header';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
