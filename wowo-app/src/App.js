import React from 'react';
import Styled, {createGlobalStyle} from 'styled-components';
import Login from './components/Login/Login.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import './App.css';

import UserSignup from './components/userSignup/UserSignup.js'


function App() {
  return (
    <div className="App">
      <h1>WoWo App</h1>
      <LandingPage />
      <UserSignup />
    </div>

  );
}

export default App;
