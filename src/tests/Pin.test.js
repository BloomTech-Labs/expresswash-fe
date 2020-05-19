import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pin from "../components/ClientDashboard/FindWash/Pin";

test("Pin in FindWash ClientDashboard", () => {
  const { getByTestId } = render(<Pin />);
  expect(getByTestId(/pin/i)).toBeInTheDocument();
});
