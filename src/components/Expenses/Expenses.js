import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  let content;

  if (filteredExpenses.length === 0) {
    content = (
      <div className="no-content">
        <p>No Expenses Found Maybe Add One!</p>
      </div>
    );
  } else {
    content = filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        id={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return (
    <main>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filterChangeHandler}
          year={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {content}
      </Card>
    </main>
  );
};

export default Expenses;
