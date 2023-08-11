import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  AccordionContext,
  AccordionContextType,
} from "../components/Accordion/Accordion";

const customRender = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const renderWithContext = (
  ui: ReactElement,
  providerProps: AccordionContextType
) => {
  return render(
    <AccordionContext.Provider value={providerProps}>
      {ui}
    </AccordionContext.Provider>
  );
};

export * from "@testing-library/react";
export { customRender as render, renderWithContext };
