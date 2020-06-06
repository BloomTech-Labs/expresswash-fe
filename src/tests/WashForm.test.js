import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import WashForm from "../components/ClientDashboard/FindWash/WashSteps/WashForm";
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
const washState = {
  date: "now",
  vehicle: {
    category: "small",
  },
  selectedAddress: "123 baker st. tampa, fl, 34232",
};
test("Wash Form from wash steps 1", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <WashForm step={1} values={{ currentAddress: "1234 way" }} />
    </Router>
  );
  expect(getByText(/enter or choose your car location/i)).toBeInTheDocument();
});
test("Wash Form from wash steps 2", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <WashForm step={2} values={{ currentAddress: "1234 way" }} />
    </Router>
  );
});
test("Wash Form from wash steps 3", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <WashForm step={3} currentWeek={[1, 2, 3, 4, 5, 6, 7]} />
    </Router>
  );
});
test("Wash Form from wash steps 4", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <WashForm step={4} currentWeek={[1, 2, 3, 4, 5, 6, 7]} />
    </Router>
  );
});
test("Wash Form from wash steps 5", () => {
  const { getByText, debug } = renderWithRedux(
    <Router>
      <WashForm step={5} washState={washState} />
    </Router>
  );
});
