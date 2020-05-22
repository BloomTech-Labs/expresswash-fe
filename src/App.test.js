import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Renders without crashing", async () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  expect(getByText(/earn extra income/i)).toBeInTheDocument();
});
