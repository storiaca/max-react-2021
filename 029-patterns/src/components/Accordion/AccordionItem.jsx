import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, className, title, children }) => {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h2 onClick={() => toggleItem(id)}>{title}</h2>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
