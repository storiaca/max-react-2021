import { useAccordionContext } from "./Accordion";

const AccordionTitle = ({ id, children, className }) => {
  const { openItemId, toggleItem } = useAccordionContext();
  return (
    <h2 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h2>
  );
};

export default AccordionTitle;
