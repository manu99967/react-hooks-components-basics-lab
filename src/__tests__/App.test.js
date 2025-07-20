// JavaScript
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import React from "react";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();
  expect(container.querySelector("#about")).toBeInTheDocument();
});
