import { render, screen } from "../../../utils/test-utils";
import { describe } from "vitest";
import AccordionHome from "..";

describe("Accordion test suite", () => {
  it("shows Accordion home text", () => {
    render(<AccordionHome />);
    expect(screen.getByText(/Accordion component/i)).toBeInTheDocument();
  });
});
