import { useAccordionContext } from "./Accordion";

const AccordionTitle = ({ id, children }) => {
  const { openItemId, toggleItem } = useAccordionContext();
  return <h2 onClick={() => toggleItem(id)}>{children}</h2>;
};

export default AccordionTitle;
