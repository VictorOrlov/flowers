import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";

interface IProps {
  title?: string;
  data: any;
}

const RadarDiagramm: React.FC<IProps> = ({ data, title }: IProps) => {
  const filterWatchWithoutVotes = data.filter((item: any) => item.total !== 0);

  return (
    <div className="dashboardWrapper">
      <div className="dashboardWrapper_header">
        <span className={"dashboardWrapper_title"}>{title}</span>
      </div>
      <div className="dashboardWrapper_body">
        <ResponsiveContainer>
          <RadarChart data={filterWatchWithoutVotes}>
            <PolarGrid />
            <PolarAngleAxis dataKey="hour" />
            <PolarRadiusAxis angle={30} />
            <Radar
              dataKey="Голоса"
              stroke="#fa7d4d"
              fill="#fa7d4d"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="Участники"
              stroke="#90c679"
              fill="#90c679"
              fillOpacity={0.6}
            />
            <Tooltip wrapperStyle={{ zIndex: "1000" }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarDiagramm;
