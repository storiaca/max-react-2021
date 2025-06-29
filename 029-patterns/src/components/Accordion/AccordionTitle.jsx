import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionTitle = ({ children, className }) => {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h2 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h2>
  );
};

export default AccordionTitle;
