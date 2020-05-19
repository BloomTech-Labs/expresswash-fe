import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import UserSignup from "./UserSignup";

test("renders signup page", () => {
  const { getByText } = render(
    <Router>
      <UserSignup />
    </Router>
  );
});
