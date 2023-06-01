import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensesHandler = (expenseData) => {
    console.log(expenseData);

    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(expense);
    props.onAddExpense(expense);
  };

  return (
    <div className="newExpense">
      <ExpenseForm onSaveExpensesData={saveExpensesHandler} />
    </div>
  );
};

export default NewExpense;
