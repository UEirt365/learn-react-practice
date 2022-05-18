import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log(props);
  const inputDate = new Date(props.date);
  const month = inputDate.toLocaleString("en-US", { month: "long" });
  const day = inputDate.toLocaleString("en-US", { day: "2-digit" });
  const year = inputDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
