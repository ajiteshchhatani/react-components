import { useContext } from "react";
import { AccordionContext } from "./Accordion";

interface AccordionContentPropsType {
  children: React.ReactNode;
}
const AccordionContent = ({ children }: AccordionContentPropsType) => {
  const { panelOpen } = useContext(AccordionContext);
  return <div className={`${panelOpen ? `block` : `hidden`}`}>{children}</div>;
};

export default AccordionContent;
