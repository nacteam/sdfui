import React from "react";
import { render } from "@testing-library/react";

import Ripple from "./Ripple";

describe("Ripple", () => {
  test("renders the Ripple component", () => {
    render(<Ripple />);
  });
});