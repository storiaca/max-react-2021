import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, className, title, children }) => {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }
  return (
    <li className={className}>
      <h2 onClick={handleClick}>{title}</h2>
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
