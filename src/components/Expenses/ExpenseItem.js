import { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const changeHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expenseItem">
      <div className="expenseItem__date">
        <span>{month}</span>
        <span>{year}</span>
        <span className="expenseItem__date--day">{day}</span>
      </div>
      <div className="expenseItem__info">
        <h2>{title}</h2>
        <div className="expenseItem__info--price">${props.amount}</div>
      </div>
      <button onClick={changeHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
