import { describe, vi } from "vitest";
import { render, renderWithContext, screen } from "../../../utils/test-utils";
import AccordionTitle from "../AccordionTitle";
import Icon from "../../Icon";

describe("Accordion title component", () => {
  it("shows accordion heading with custom icon", () => {
    const dummyPanelFn = vi.fn();
    renderWithContext(
      <AccordionTitle
        heading="Sample heading"
        icon={<Icon id="plus-icon" />}
      ></AccordionTitle>,
      { panelOpen: false, setPanelOpen: dummyPanelFn }
    );

    expect(screen.getByTestId("icon_svg")).toBeInTheDocument();
  });

  it("shows a default minus icon when panel is open", () => {
    const dummyPanelFn = vi.fn();
    renderWithContext(
      <AccordionTitle heading="Sample heading"></AccordionTitle>,
      { panelOpen: true, setPanelOpen: dummyPanelFn }
    );

    expect(screen.getByTestId("icon_svg")).toBeInTheDocument();
  });
});
