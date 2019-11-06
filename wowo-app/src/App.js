import React from 'react';
import Styled, {createGlobalStyle} from 'styled-components';
import Login from './components/login/Login.js';
import './App.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap')

    html, body {
        font-family: 'Open Sans', sans-serif !important;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden; 
    }

    body {
      margin: 0;
    }

    #root {
        min-height: 100vh;
        width: 100%;
    }
`

const Container = Styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
    </Container>
  );
}

export default App;
