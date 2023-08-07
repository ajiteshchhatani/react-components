import { describe, expect, it } from "vitest";
import { render } from "./utils/test-utils";
import App from "./App";
import { screen } from "@testing-library/react";

describe("app component tests", () => {
  it("shows root route with accordion component", () => {
    render(<App />, { route: "/" });
    expect(screen.getByText(/Accordion/i)).toBeInTheDocument();
  });
});
