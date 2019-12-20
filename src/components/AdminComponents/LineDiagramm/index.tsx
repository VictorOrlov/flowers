import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

interface IProps {
  title?: string;
  data: any;
  onInfoRequest?: (request: Request) => void;
}
const COLOR = [
  // "#83a6ed",
  // "#8dd1e1",
  // "#a4de6c",
  // "#d0ed57",
  // "#ffc658" ///////////
  // "#74cc33",
  // "#ffde00",
  // "#ff6267",
  // "#ff9894",
  // "#c6c6c6"//////////
  "#008a4e", //1
  "#02a762", //
  "#31b37c", //
  "#68c398", //
  "#68c398" //
];

const LineDiagramm: React.FC<IProps> = ({
  data,
  title,
  onInfoRequest
}: IProps) => {
  const x = new RegExp("г Казань, ", "g");
  const topData = () => {
    // let sss = [...data];
    for (let i = 0; i < data.length; i++) {
      data[i].address = data[i].address.replace(x, "");
    }
    return data;
  };

  return (
    <div className="lineDiagramm">
      <div className="lineDiagramm_header">
        <span className={"lineDiagramm_title"}>{title}</span>
      </div>
      <div className="lineDiagramm_body">
        <ResponsiveContainer>
          <BarChart data={topData()} onClick={onInfoRequest}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="address" tick={false} height={5} />
            <YAxis width={0} tick={false} />
            <Tooltip wrapperStyle={{ zIndex: "3000" }} />
            <Bar
              dataKey="voicesCount"
              name="Голосов за участника"
              fill="#fa7d4d"
              label={{ fill: "#fff", fontSize: 16, fontWeight: "bold" }}
            >
              {data.map((entry: any, index: number) => (
                <Cell
                  key={`fill-${index}`}
                  fill={COLOR[index % COLOR.length]}
                />
              ))}
            </Bar>
            {/* <Legend /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineDiagramm;
