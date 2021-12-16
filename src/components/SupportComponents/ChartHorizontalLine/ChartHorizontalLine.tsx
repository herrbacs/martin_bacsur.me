import "./ChartHorizontalLine.scss";

type ChartHorizontalLineProps = {
  data: [
    {
      name: string;
      percent: string;
    }
  ];
  nameColor?: string;
  chartColor?: string;
  chartBorderColor?: string;
};

const ChartHorizontalLine = ({
  data,
  nameColor = "#44546a",
  chartBorderColor = "#44546a",
  chartColor = "#44546a",
}: ChartHorizontalLineProps) => {
  return (
    <div className="chart-horizontal-line">
      {data.map((d: any) => {
        return (
          <div className="current-line">
            <span style={{ color: nameColor }}>
              {d.name}
            </span>
            <div
              style={{border: `2px solid ${chartBorderColor}`}}
              className="char-line-bg"
            >
              <div
                style={{
                  width: `${d.percent}%`,
                  backgroundColor: chartColor
                }}
                className="char-line-value"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartHorizontalLine;
