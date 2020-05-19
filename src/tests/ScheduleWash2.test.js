import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ScheduleWash2 from "../components/ClientDashboard/FindWash/ScheduleWash2";

test("ScheduleWash2 component", () => {
  const { getByText, debug } = render(<ScheduleWash2 />);
  expect(getByText(/choose a time/i)).toBeInTheDocument();
});
