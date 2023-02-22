/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Header from './pages/Header';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
