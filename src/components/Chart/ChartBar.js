import "./ChartBar.css";

const ChartBar = (props) => {
  let barFilHeight = "0%";

  if (props.maxValue > 0) {
    barFilHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartBar">
      <div className="chartBar__inner">
        <div className="chartBar__fill" style={{ height: barFilHeight }}></div>
      </div>
      <div className="chartBar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
