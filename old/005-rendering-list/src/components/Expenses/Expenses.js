import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const saveFilterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYear={saveFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
