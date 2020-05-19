import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Payment from "../components/ClientDashboard/Payment";

test("Payment component in ClientDashboard", () => {
  const { getByText } = render(
    <Router>
      <Payment />
    </Router>
  );
  expect(getByText(/enter promotion code/i));
});
test("Toggle state and form submit", async () => {
  const { getByText, getByTestId, debug } = render(
    <Router>
      <Payment />
    </Router>
  );
  const addMethod = getByText(/add payment method/i);
  userEvent.click(addMethod);
  expect(getByText(/card number/i)).toBeInTheDocument();
  await userEvent.type(getByTestId(/zip/i), "test testerson");
  const save = getByText(/save changes/i);
  userEvent.click(save);
});
