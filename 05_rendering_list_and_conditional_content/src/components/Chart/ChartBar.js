import "./ChartBar.css";

const ChartBar = (props) => {
  let heightStyle = "0%";
  if (props.maxValue !== 0) {
    heightStyle = (props.value * 100) / props.maxValue + "%";
  }

  console.log(heightStyle);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightStyle }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
