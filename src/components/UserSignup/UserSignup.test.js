import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import UserSignup from "./UserSignup";
//imports for mocking redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "../../reducers/initialState";
import userReducer from "../../reducers/userReducer";
import Address from "./signup-steps/Address";
jest.mock("./signup-steps/Address");

function renderWithRedux(
  ui,
  { initialState, store = createStore(userReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

// const setupGoogleMock = () => {
//   /*** Mock Google Maps JavaScript API ***/
//   const google = {
//     maps: {
//       places: {
//         Autocomplete: class {},
//         PlacesServiceStatus: {
//           INVALID_REQUEST: "INVALID_REQUEST",
//           NOT_FOUND: "NOT_FOUND",
//           OK: "OK",
//           OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
//           REQUEST_DENIED: "REQUEST_DENIED",
//           UNKNOWN_ERROR: "UNKNOWN_ERROR",
//           ZERO_RESULTS: "ZERO_RESULTS",
//         },
//       },
//       Geocoder: () => {},
//       GeocoderStatus: {
//         ERROR: "ERROR",
//         INVALID_REQUEST: "INVALID_REQUEST",
//         OK: "OK",
//         OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
//         REQUEST_DENIED: "REQUEST_DENIED",
//         UNKNOWN_ERROR: "UNKNOWN_ERROR",
//         ZERO_RESULTS: "ZERO_RESULTS",
//       },
//     },
//   };
//   global.window.google = google;
// };

// // in test file.
// beforeAll(() => {
//   setupGoogleMock();
// });

test("renders signup page", () => {
  const { getAllByText } = renderWithRedux(
    <Router>
      <UserSignup />
    </Router>
  );
  const register = getAllByText(/register/i);
  expect(register[0]).toBeInTheDocument();
});
