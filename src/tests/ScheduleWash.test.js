import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import DayPicker from "../components/ClientDashboard/FindWash/ScheduleWash";

test("Daypicker from ScheduleWash", () => {
  const { getByText } = render(<DayPicker />);
  expect(getByText(/navigate/i)).toBeInTheDocument();
});
