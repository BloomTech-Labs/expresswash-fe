import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import SelectAddress from "../components/ClientDashboard/FindWash/WashSteps/SelectAddress";
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

test("Select Address component", async () => {
  const { getByText, getByTestId, debug } = renderWithRedux(
    <Router>
      <SelectAddress
        values={{ currentAddress: "1234 way", lat: 20, long: 10 }}
        searchResults={[{ geometry: { coordinates: [12, 15] } }]}
        geoCoding={jest.fn()}
        getUserLocation={jest.fn()}
        next={jest.fn()}
      />
    </Router>
  );
  expect(getByText(/home/i)).toBeInTheDocument();
  const input = getByTestId(/choose/i);
  await userEvent.type(input, "1234 way");
  const resultli = getByTestId(/resultli/i);
  await userEvent.click(resultli);
});
