import { describe, vi } from "vitest";
import { renderWithContext } from "../../../utils/test-utils";
import AccordionContent from "../AccordionContent";
import { screen } from "@testing-library/react";

describe("Accordion content component", () => {
  it("shows accordion panel is open and content is visible", () => {
    const dummyPanelOpenFn = vi.fn();
    renderWithContext(<AccordionContent>Lorem Ipsum</AccordionContent>, {
      panelOpen: true,
      setPanelOpen: dummyPanelOpenFn,
    });
    expect(screen.getByText(/Lorem Ipsum/i)).toBeInTheDocument();
  });
});
