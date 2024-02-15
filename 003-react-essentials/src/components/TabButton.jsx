import React from 'react';

const TabButton = ({ children, onSelect, isSelected }) => {
  console.log(children);
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
