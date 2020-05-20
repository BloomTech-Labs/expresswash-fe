import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Backdrop from "../components/ClientDashboard/HamburgerNavMenu.js/Backdrop";
import NavButton from "../components/ClientDashboard/HamburgerNavMenu.js/NavButton";
import SideDrawer from "../components/ClientDashboard/HamburgerNavMenu.js/SideDrawer";

test("render backdrop", () => {
  const { getByText, debug } = render(<Backdrop />);
});
test("render nav button", () => {
  const { debug } = render(<NavButton />);
});
test("render side drawer", () => {
  const { debug, getByText } = render(
    <Router>
      <SideDrawer />
    </Router>
  );
  expect(getByText(/sign out/i)).toBeInTheDocument();
});
