import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ConfirmationJobCreation from "../components/ClientDashboard/FindWash/WashSteps/ConfirmationJobCreation";
import "react-stripe-checkout";
import axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/rootReducer";
jest.mock("react-stripe-checkout");
jest.mock("axios");

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

test("confimation job", async () => {
  const { getByText, getByTestId, debug } = renderWithRedux(
    <Router>
      <ConfirmationJobCreation prev={jest.fn()} />
    </Router>
  );
  debug();
  expect(getByText(/license plate/i)).toBeInTheDocument();
  await userEvent.click(getByTestId(/prev/i));
  const schedule = getByText(/schedule/i);
  axios.post.mockResolvedValue({ data: { rowCount: 1 } });
  await userEvent.click(schedule);
});
