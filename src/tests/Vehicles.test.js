import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import EachVehicle from "../components/ClientDashboard/Vehicles/EachVehicle";
import VehicleList from "../components/ClientDashboard/Vehicles/VehicleList";
import Vehicles from "../components/ClientDashboard/Vehicles/Vehicles";
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
    store = createStore(
      rootReducer,
      { userReducer: { user: { cars: [{ carId: 1 }] } } },
      applyMiddleware(thunk)
    ),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
test("each vehicle component", () => {
  const { debug, getByText } = render(
    <EachVehicle
      vehicle={{ year: 1998, color: "blue", make: "ford", model: "truck" }}
    />
  );
  expect(getByText(/blue/i)).toBeInTheDocument();
});
test("vehicle list component", () => {
  const { debug } = render(<VehicleList vehicles={[{ carId: 1 }]} />);
});
test("vehicle component", async () => {
  const { debug, getByText } = renderWithRedux(
    <Router>
      <Vehicles />
    </Router>
  );
  expect(getByText(/add a vehicle/i));
  await userEvent.click(getByText(/add a vehicle/i));
});
