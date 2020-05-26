import React from "react";
import { render, getByText } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "../components/ClientDashboard/Navigation";
import {
  getClientInformation,
  updateClientInformation,
  getClientRating,
} from "../actions/actionTypes";
//redux for mocking
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

// jest.mock("../actions/actionTypes");

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

test("renders user navigation", () => {
  const { getByText } = renderWithRedux(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByText(/payment/i)).toBeInTheDocument();
});
