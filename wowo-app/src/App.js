import React from "react";
import Styled, { createGlobalStyle } from "styled-components";
import Login from "./components/login/Login.js";
import LandingPage from "./components/LandingPage.js";
import "./App.css";
import UserSignup from "./components/UserSignup/UserSignup.js";
import WasherSignUpForm from "./components/WasherSignUp/WasherSignUpForm.js";

function App() {
  return (
    <div className="App">
      <h1>WoWo App</h1>
      <WasherSignUpForm />
    </div>
  );
}
export default App;
