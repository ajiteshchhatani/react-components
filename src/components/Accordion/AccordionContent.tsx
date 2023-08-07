import { useContext } from "react";
import useAccordion from "./hooks/useAccordion";
import { AccordionContext } from "./Accordion";

interface AccordionContentPropsType {
  children: React.ReactNode;
}
const AccordionContent = ({ children }: AccordionContentPropsType) => {
  const { panelOpen } = useContext(AccordionContext);
  console.log("content panel open", panelOpen);
  return <div className={`${panelOpen ? `block` : `hidden`}`}>{children}</div>;
};

export default AccordionContent;
