import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import FindWash from "../components/ClientDashboard/FindWash/FindWash";
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

test("renders the find wash home page", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <FindWash />
    </Router>
  );
});
