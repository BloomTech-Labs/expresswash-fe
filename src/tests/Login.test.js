import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/login/Login";
import axios from "axios";
//imports for mocking redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

beforeEach(() => {
  const script = document.createElement("script");
  document.body.appendChild(script);
});

test("login component", async () => {
  const { debug, getByLabelText, getByTestId } = renderWithRedux(
    <Router>
      <Login />
    </Router>
  );
  await userEvent.click(getByTestId(/login/i));
  await userEvent.type(getByTestId(/email/i), "email");
});
