import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import UserCircle from "../components/ClientDashboard/FindWash/UserCircle";

test("User circle component in client dashboard", () => {
  const { getByTestId } = render(<UserCircle />);
  expect(getByTestId(/usercircle/i)).toBeInTheDocument();
});
