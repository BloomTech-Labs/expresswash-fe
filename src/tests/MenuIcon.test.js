import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MenuIcon from "../images/MenuIcon";

test("render menu icon image", () => {
  const { debug } = render(<MenuIcon />);
});
