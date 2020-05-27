import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import WasherSignUpReview from "../components/WasherSignUp/WasherSignUpReview";

test("washer sign up review", () => {
  const { debug, getByText } = render(
    <WasherSignUpReview
      values={{
        firstname: "test",
        lastName: "test",
        email: "test",
        phone: "123456789",
        street: "123 way",
        apt: "",
        city: "test",
        usState: "test",
        zipCode: "12345",
      }}
    />
  );
  expect(getByText(/last name/i)).toBeInTheDocument();
});
