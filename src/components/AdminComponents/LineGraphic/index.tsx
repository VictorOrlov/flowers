import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

interface IProps {
  title?: string;
  data: any;
  colorHeader?: string;
}

const LineGraphic: React.FC<IProps> = ({
  data,
  title,
  colorHeader
}: IProps) => {
  return (
    <div className="dashboardWrapper">
      <div
        className="dashboardWrapper_header"
        style={colorHeader ? { backgroundColor: colorHeader } : {}}
      >
        <span className={"dashboardWrapper_title"}>{title}</span>
        <span className={"dashboardWrapper_title ml-1"}>от</span>
        <span className="dashboardWrapper_header_count">{data[0].name}</span>
        <span className={"dashboardWrapper_title"}>до</span>
        <span className="dashboardWrapper_header_count">
          {data[data.length - 1].name}
        </span>
      </div>
      <div className="dashboardWrapper_body">
        <ResponsiveContainer>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis
              // stroke="#fa7d4d"
              width={30}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip wrapperStyle={{ zIndex: "1000" }} />
            <Line dataKey="countVoices" name="Голоса" stroke="#fa7d4d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraphic;
