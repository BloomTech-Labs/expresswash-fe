import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Login from "./components/login/Login";
import WasherSignUp from "./components/WasherSignUp/WasherSignUpForm";
import "./App.css";
import UserSignup from "./components/UserSignup/UserSignup.js";
import WasherSignUpForm from "./components/WasherSignUp/WasherSignUpForm.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user-register" component={UserSignup} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/washer-register" component={WasherSignUp} />
      </Switch>
    </div>
  );
}

export default App;
