import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import UserSignup from "../components/UserSignup/UserSignup";
//imports for mocking redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";
// import Address from "./signup-steps/Address";
// jest.mock("./signup-steps/Address");

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(userReducer, initialState, applyMiddleware(thunk)),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  const google = {
    maps: {
      places: {
        Autocomplete: class {
          addListener() {}
        },
        PlacesServiceStatus: {
          INVALID_REQUEST: "INVALID_REQUEST",
          NOT_FOUND: "NOT_FOUND",
          OK: "OK",
          OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
          REQUEST_DENIED: "REQUEST_DENIED",
          UNKNOWN_ERROR: "UNKNOWN_ERROR",
          ZERO_RESULTS: "ZERO_RESULTS",
        },
      },
      Geocoder: () => {},
      GeocoderStatus: {
        ERROR: "ERROR",
        INVALID_REQUEST: "INVALID_REQUEST",
        OK: "OK",
        OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
        REQUEST_DENIED: "REQUEST_DENIED",
        UNKNOWN_ERROR: "UNKNOWN_ERROR",
        ZERO_RESULTS: "ZERO_RESULTS",
      },
    },
  };
  global.window.google = google;
};

// in test file.
beforeAll(() => {
  setupGoogleMock();
});

test("renders signup page", () => {
  const { getAllByText } = renderWithRedux(
    <Router>
      <UserSignup />
    </Router>
  );
  const register = getAllByText(/register/i);
  expect(register[0]).toBeInTheDocument();
});

test("adds input and renders all signup screens", async () => {
  const { getByLabelText, getByText, getByTestId, debug } = renderWithRedux(
    <Router>
      <UserSignup />
    </Router>
  );
  const email = getByLabelText(/email/i);
  const password = getByLabelText(/password/i);
  const typeEmail = await userEvent.type(email, "test@test.com");
  const typePass = await userEvent.type(password, "taco");
  const register = getByTestId("registerbtn");
  const registerclick = await userEvent.click(register);
  expect(getByText(/first name/i)).toBeInTheDocument();
  expect(getByText(/phone number/i)).toBeInTheDocument();
  const name = getByLabelText(/first name/i);
  const lname = getByLabelText(/last name/i);
  const phnumber = getByLabelText(/phone number/i);
  await userEvent.type(name, "testfirst");
  await userEvent.type(lname, "testlast");
  await userEvent.type(phnumber, "123456789");
  await userEvent.click(getByText(/next/i));
  expect(getByText(/state/i)).toBeInTheDocument();
  await userEvent.click(getByText(/next/i));
  expect(getByText(/zipcode/i)).toBeInTheDocument();
  const submit = getByText(/submit/i);
  expect(submit).toBeInTheDocument();
  await userEvent.click(submit);
});
