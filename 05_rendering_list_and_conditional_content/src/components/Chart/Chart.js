import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueAsArray = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = Math.max(...valueAsArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} {...dataPoint} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
