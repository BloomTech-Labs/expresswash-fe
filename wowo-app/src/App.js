
import React from "react";
import { Route } from "react-router-dom";
import Styled, { createGlobalStyle } from "styled-components";
import Login from "./components/login/Login.js";
import LandingPage from "./components/LandingPage.js";
import "./App.css";

import UserSignup from "./components/UserSignup/UserSignup.js";




function App() {
  return (
    <div className="App">
      <h1>WoWo App</h1>
      <UserSignup />
      {/* <LandingPage /> */}
    </div>
  );
}
export default App;
