import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom';


import Login from './components/login/Login.js';
import LandingPage from './components/LandingPage.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.css';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap')

    html, body {
        font-family: 'Open Sans', sans-serif !important;
    }

    #root {
        min-height: 100vh;
    }
`

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
`




function App() {
    return (
        <Container>
          <GlobalStyle />
          <Switch>
              <Route exact path="/" component={Login} />
              {/* <PrivateRoute exact path="/main" component={} /> */}
          </Switch>
          
        </Container>
    );
}

export default App;