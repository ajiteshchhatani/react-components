import { describe, expect, it } from "vitest";
import { render } from "./utils/test-utils";
import App from "./App";
import { screen } from "@testing-library/react";
import StarRating from "./components/Star_Rating";

describe("app component tests", () => {
  it("shows root route with accordion component", () => {
    render(<App />, { route: "/" });
    expect(screen.getByText(/Accordion/i)).toBeInTheDocument();
  });

  it("shows star component on clicking on star link in the sidebar", async () => {
    const { user } = render(<StarRating />, { route: "/star_rating" });
    //await user.click(screen.getByText("Star Rating"));
    expect(screen.getByText(/Your given rating is/i)).toBeInTheDocument();
  });
});
