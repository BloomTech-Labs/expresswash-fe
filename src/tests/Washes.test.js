import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Washes from "../components/ClientDashboard/Washes";

test("washes component in ClientDashboard", () => {
  const { getByText } = render(
    <Router>
      <Washes />
    </Router>
  );
  expect(getByText(/your washes/i)).toBeInTheDocument();
});
