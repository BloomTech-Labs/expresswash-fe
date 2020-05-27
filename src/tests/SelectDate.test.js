import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import SelectDate from "../components/ClientDashboard/FindWash/WashSteps/SelectDate";
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

test("select date component from wash steps", async () => {
  const { getByText, getAllByTestId, debug } = renderWithRedux(
    <Router>
      <SelectDate
        currentWeek={[1, 2, 3, 4, 5, 6, 7]}
        prev={jest.fn()}
        washDateOnClick={jest.fn()}
        next={jest.fn()}
      />
    </Router>
  );
  expect(getByText(/back/i)).toBeInTheDocument();
  await userEvent.click(getByText(/back/i));
  await userEvent.click(getAllByTestId(/day/i)[0]);
  await userEvent.click(getByText(/next/i));
});
