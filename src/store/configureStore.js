import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import reduxThunk from 'redux-thunk';

// get token from localstorage
const jwtToken = localStorage.getItem('JWT_TOKEN');

export default function configureStore() {
  return createStore(
    rootReducer,{
      auth: {
        token: jwtToken,
        isAuthenticated: jwtToken ? true : false
      }
    },
      applyMiddleware(reduxThunk,thunk, logger),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
