import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const saveFilterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYear={saveFilterYearHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
