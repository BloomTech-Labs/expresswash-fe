import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Account from "../components/ClientDashboard/Account";

test("Account component in ClientDashboard", () => {
  const { getByText } = render(<Account />);
  expect(getByText(/edit/i)).toBeInTheDocument();
});
