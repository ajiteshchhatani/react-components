import { ReactNode, createContext, useState } from "react";

interface AccordionPropsType {
  children: ReactNode;
  isOpen?: boolean;
}

interface AccordionContextType {
  panelOpen: boolean;
  setPanelOpen: () => void;
}

export const AccordionContext = createContext({} as AccordionContextType);

const Accordion = ({ children, isOpen = false }: AccordionPropsType) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <AccordionContext.Provider
      value={{ panelOpen: open, setPanelOpen: () => setOpen(!open) }}
    >
      <div className="flex flex-col">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
