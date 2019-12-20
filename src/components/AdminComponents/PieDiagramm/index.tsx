import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Лучшее оформление фасада", value: 5873 },
  { name: "Лучшее оформление дворовой территории", value: 3789 },
  {
    name:
      "Лучшее оформление прилегающей территории для организаций и предприятий",
    value: 4567
  },
  { name: "Самая оригинальная цветочная композиция", value: 2964 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieDiagramm = () => {
  return (
    <div className="col-11 col-md-6">
      <h3 className="ta-c">Колличество голосов</h3>
      <div style={{ height: "400px" }}>
        <ResponsiveContainer>
          <PieChart width={800} height={400}>
            <Pie
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#fa7d4d"
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`color-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// const PieDiagramm:React.FC<IProps> = ({data}: IProps) => {

export default PieDiagramm;
