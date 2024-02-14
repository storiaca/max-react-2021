import React from 'react';

const TabButton = ({ children }) => {
  function handleClick(e) {
    console.log('Hello world', e.target);
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
