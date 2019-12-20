import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

interface IProps {
  title?: string;
  data: any;
}

const BeLineDiagramm: React.FC<IProps> = ({ data, title }: IProps) => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardWrapper_header">
        <span className={"dashboardWrapper_title"}>{title}</span>
      </div>
      <div className="dashboardWrapper_body">
        <ResponsiveContainer>
          <BarChart width={600} height={300} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={false} height={5} />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#fa7d4d"
              width={35}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#90c679"
              width={25}
            />
            <Tooltip wrapperStyle={{ zIndex: "1000" }} />
            <Bar
              yAxisId="left"
              dataKey="countVoices"
              name="Голоса"
              fill="#fa7d4d"
            />
            <Bar
              yAxisId="right"
              dataKey="countRequests"
              name="Участники"
              fill="#68c398"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BeLineDiagramm;
