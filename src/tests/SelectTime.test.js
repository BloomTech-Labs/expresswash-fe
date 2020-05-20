import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import SelectTime from "../components/ClientDashboard/FindWash/WashSteps/SelectTime";
//redux for mocking
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";
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

test("select time component for wash steps", async () => {
  const { getByText, getAllByTestId, debug } = renderWithRedux(
    <Router>
      <SelectTime washTimeOnClick={jest.fn()} prev={jest.fn()} />
    </Router>
  );
  const times = getAllByTestId(/time/i);
  times.forEach(async (item) => {
    await userEvent.click(item);
  });
  await userEvent.click(getByText(/back/i));
});
