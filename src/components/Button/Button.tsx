import React from "react";

interface IProps {
  large?: boolean;
  red?: boolean;
  green?: boolean;
  blue?: boolean;
  gold?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  children: string;
  submit?: boolean;
}

const Button: React.FC<IProps> = ({
  red,
  green,
  blue,
  gold,
  large,
  onClick,
  children,
  submit
}) => {
  function style() {
    if (red) return "button_red";
    if (green) return "button_green";
    if (blue) return "button_blue";
    if (gold) return "button_gold";
  }
  return (
    <button
      className={`button ${style()} ${large ? "large" : null}`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
