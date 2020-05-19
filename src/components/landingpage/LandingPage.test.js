import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import LandingPage from "./LandingPage";

test("Landing page renders without crashing", () => {
  const { getByText } = render(
    <Router>
      <LandingPage />
    </Router>
  );
  const login = getByText(/log in/i);
  const signup = getByText(/sign up/i);
  expect(login).toBeInTheDocument();
  expect(signup).toBeInTheDocument();
});
test("component Did Mount", () => {
  const spy = jest.spyOn(LandingPage.prototype, "componentDidMount");
  const wrapper = render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
test("local storage userType", () => {
  const getSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    "getItem"
  );
  getSpy.mockResolvedValueOnce("client");
  const wrapper = render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(getSpy).toHaveBeenCalledTimes(2);
});
