import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "../components/WasherDashboard/Navigation";
//imports for mocking redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      {
        userReducer: {
          user: {
            user: { creationDate: "hey", washer: { workStatus: true } },
          },
        },
      },
      applyMiddleware(thunk)
    ),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
test("washer navigation component", async () => {
  const { debug, getByTestId } = renderWithRedux(
    <Router>
      <Navigation />
    </Router>
  );
  await userEvent.click(getByTestId(/logout/i));
});
