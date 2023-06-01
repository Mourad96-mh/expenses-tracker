import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // console.log(props.dataPoints);
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
