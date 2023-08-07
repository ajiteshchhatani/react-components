import { useContext } from "react";
import { AccordionContext } from "./Accordion";
import Icon from "./Icon";

interface AccordionTitlePropsType {
  heading: string;
  icon?: React.ReactNode;
}

const AccordionTitle = ({ heading, icon }: AccordionTitlePropsType) => {
  const { panelOpen, setPanelOpen } = useContext(AccordionContext);
  return (
    <div
      className="flex justify-between items-center border-b-2 border-b-gray-400"
      onClick={setPanelOpen}
    >
      <p className="text-xl">{heading}</p>
      {icon ? (
        icon
      ) : panelOpen ? (
        <Icon role="button" width={32} height={32} id="icon-minus" />
      ) : (
        <Icon role="button" width={32} height={32} id="icon-plus" />
      )}
    </div>
  );
};

export default AccordionTitle;
