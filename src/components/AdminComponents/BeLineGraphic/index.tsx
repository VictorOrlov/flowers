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
}

const BeLineGraphic: React.FC<IProps> = ({ data, title }: IProps) => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardWrapper_header">
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
              yAxisId="left"
              orientation="left"
              stroke="#fa7d4d"
              width={30}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#90c679"
              width={30}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip wrapperStyle={{ zIndex: "1000" }} />
            {/* <Legend /> */}
            <Line
              yAxisId="left"
              dataKey="countVoices"
              name="Голоса"
              stroke="#fa7d4d"
              type="monotone"
              strokeWidth={"3px"}
            />
            <Line
              yAxisId="right"
              dataKey="countRequests"
              name="Участники"
              stroke="#90c679"
              type="monotone"
              strokeWidth={"3px"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BeLineGraphic;
