import { createContext } from "react";

const AccordionItemContext = createContext();

export function useaccordionItemContext() {}
const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
