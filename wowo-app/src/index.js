import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

// test concept
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage.js";


import axios from 'axios'

import configureStore from "./store/configureStore";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import App from "./App";

// get token from localstorage
const jwtToken = localStorage.getItem('JWT_TOKEN');

// request headers to include jwt token on every request
axios.defaults.headers.common['Authorization'] = jwtToken;



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={LandingPage} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
