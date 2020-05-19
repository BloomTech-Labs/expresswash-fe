import React from "react";
import { render, getByText } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../components/Dashboard";
//redux for mocking
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

test("render dashboard component", () => {
  const { getByText } = renderWithRedux(
    <Router>
      <Dashboard />
    </Router>
  );
  expect(getByText(/dashboard/i)).toBeInTheDocument();
});
