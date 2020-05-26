import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import QuoteGenerator from "../components/QuoteGenerator/QuoteGenerator";
import axios from "axios";
//imports for mocking redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";

// import Address from "./signup-steps/Address";
jest.mock("axios");

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

test("quote generator component", async () => {
  const { debug, getByText } = renderWithRedux(
    <Router>
      <QuoteGenerator />
    </Router>
  );
  expect(getByText(/bmw/i)).toBeInTheDocument();
  await userEvent.selectOptions(getByText(/bmw/i));
  axios.post.mockResolvedValue({ data: [{ make: "ford", model: "truck" }] });
  await userEvent.click(getByText(/get models for make/i));
  await userEvent.selectOptions(getByText(/truck/i));
  await userEvent.click(getByText(/get pricing/i));
});
