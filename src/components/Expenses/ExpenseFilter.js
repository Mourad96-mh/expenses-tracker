import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onFilterYear(event.target.value);
  };

  return (
    <div className="expensesFilter">
      <div className="expensesFilter__control">
        <label>Filter By Year</label>
        <select onChange={dropdownChangeHandler} value={props.year}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
