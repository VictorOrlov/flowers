import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

interface IProps {
  value: string;
  data: any;
  title?: string;
  total?: number;
  height?: string;
}

const RadialDiagramm: React.FC<IProps> = ({
  data,
  value,
  title,
  total,
  height
}: IProps) => {
  // const styles = {
  // 	li: background: 'black'
  // };
  return (
    <div className="radial">
      {title && (
        <h3 className="radial-header">
          {title} <span>{total}</span>
        </h3>
      )}
      <div style={{ height: height || "400px" }}>
        <ResponsiveContainer>
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={20}
            startAngle={180}
            endAngle={-360}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#000" }}
              background
              dataKey={value}
            >
              {/* {
                data.map(({entry, index}:{entry:any, index:any}) => <Cell key={`cell-${index}`} fill={COLORS[index]}/>)
              } */}
            </RadialBar>
            <Legend iconSize={10} width={450} align={"left"} />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadialDiagramm;
