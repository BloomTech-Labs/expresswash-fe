import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ConfirmationJobCreation from "../components/ClientDashboard/FindWash/WashSteps/ConfirmationJobCreation";
import "react-stripe-checkout";
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
jest.mock("react-stripe-checkout");
jest.mock("axios");

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

const washState = {
  date: "now",
  vehicle: {
    category: "small",
  },
  selectedAddress: "123 baker st. tampa, fl, 34232",
};

test("confimation job", async () => {
  const { getByText, getByTestId, debug } = renderWithRedux(
    <Router>
      <ConfirmationJobCreation prev={jest.fn()} washState={washState} />
    </Router>
  );
  debug();
  expect(getByText(/license plate/i)).toBeInTheDocument();
  await userEvent.click(getByTestId(/prev/i));
  const schedule = getByText(/schedule/i);
  axios.post.mockResolvedValue({ data: { rowCount: 1 } });
  await userEvent.click(schedule);
});
