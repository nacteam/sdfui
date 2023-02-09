import React from "react";
import { render } from "@testing-library/react";
import ConfigProvider from ".";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<ConfigProvider />);
  });
});