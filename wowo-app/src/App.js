import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom';


import LandingPage from "./components/landingpage/LandingPage.js";
import Login from "./components/login/Login.js";
import UserSignUp from "./components/UserSignup/signup-steps/Name.js";
import WasherSignUp from "./components/WasherSignUp/WasherSignUpForm";
import "./App.css";


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
        <Container className="App">
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/user-register" component={UserSignUp} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/washer-register" component={WasherSignUp} />
          </Switch>
        </Container>
    );
}

export default App;