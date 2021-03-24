import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn'
import SignUn from './pages/SignUp'

const App: React.FC = () => (
  <>
    <SignUn />
    <GlobalStyle />
  </>
);

export default App;
