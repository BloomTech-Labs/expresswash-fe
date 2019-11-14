import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import UserSignUp from "./components/UserSignup/UserSignup";
import WasherSignUp from "./components/WasherSignUp/WasherSignUpForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user-register" component={UserSignUp} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/washer-register" component={WasherSignUp} />
      </Switch>
    </div>
  );
}

export default App;
