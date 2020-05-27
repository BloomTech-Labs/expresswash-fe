import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import CardSelection from "../components/PaymentForm/CardSection";
import "react-stripe-elements";
jest.mock("react-stripe-elements");

test("Card Selection Component", () => {
  const { debug, getByText } = render(<CardSelection />);
  expect(getByText(/card details/i)).toBeInTheDocument();
});
