import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Payment from "../components/ClientDashboard/FindWash/WashSteps/Payment";
import "react-stripe-checkout";
jest.mock("react-stripe-checkout");

test("Payment component in ClientDashboard", () => {
  const { debug } = render(
    <Router>
      <Payment />
    </Router>
  );
});
