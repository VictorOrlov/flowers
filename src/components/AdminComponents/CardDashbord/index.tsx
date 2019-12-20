import React from "react";

interface IProps {
  title: string;
  count: number;
}

const CardDashboard: React.FC<IProps> = ({ title, count }) => {
  return (
    <div className="cardDashboard">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <span>{count}</span>
      </div>
    </div>
  );
};

export default CardDashboard;
