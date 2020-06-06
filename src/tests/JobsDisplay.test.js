import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import JobsDisplay from "../components/WasherDashboard/JobsDisplay";
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

test("Jobs Display component", async () => {
  const { debug, getByText } = renderWithRedux(
    <Router>
      <JobsDisplay />
    </Router>
  );
  expect(getByText(/refresh accepted jobs/i)).toBeInTheDocument();
  await userEvent.click(getByText(/refresh accepted jobs/i));
});
