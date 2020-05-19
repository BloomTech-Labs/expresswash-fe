import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import FillerPage from "../components/UserSignup/FillerPage";

test("fillerpage renders", () => {
  const { getByText } = render(
    <Router>
      <FillerPage />
    </Router>
  );
  const welcome = getByText(/welcome to our registration page!/i);
  expect(welcome).toBeInTheDocument();
});
