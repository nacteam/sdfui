import React from "react";
import { render } from "@testing-library/react";

import TextField from "./TextField";

describe("Button", () => {
  test("renders the TextField component", () => {
    render(<TextField />);
  });
});