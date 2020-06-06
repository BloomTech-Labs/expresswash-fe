import React from "react";
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
//Redux mock
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
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

test("Renders without crashing", async () => {
  const { getByText } = renderWithRedux(
    <Router>
      <App />
    </Router>
  );
  expect(getByText(/earn extra income/i)).toBeInTheDocument();
});
