import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function (props) {
  return (
    <div className="new-expense">
      <ExpenseForm onCreateExpense={props.onCreateExpense} />
    </div>
  );
};

export default NewExpense;
