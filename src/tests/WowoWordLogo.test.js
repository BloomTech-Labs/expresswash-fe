import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WowoWordLogo from "../images/WowoWordLogo";

test("render wowo word logo image", () => {
  const { debug } = render(<WowoWordLogo />);
});
