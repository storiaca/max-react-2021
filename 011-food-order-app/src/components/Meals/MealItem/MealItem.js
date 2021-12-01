import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
