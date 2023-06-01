import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log(props.expenses);
  // console.log(props.expenses[0].date);
  // console.log(props.expenses[0].date.getMonth());

  const dataPoints = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // we want to update the value for each month from expenses data

  for (let i = 0; i < props.expenses.length; i++) {
    // console.log(props.expenses[i]);
    const expenseMonth = props.expenses[i].date.getMonth();
    dataPoints[expenseMonth].value += props.expenses[i].amount;
  }

  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
