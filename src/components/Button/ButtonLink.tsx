import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  to: string;
  success?: boolean;
  danger?: boolean;
  check?: boolean;
  children: string | React.ReactNode;
  onClick?: (e: any) => void;
}

const ButtonLink: React.SFC<IProps> = (props: IProps) => {
  const { to, success, danger, check, children, onClick } = props;
  function style() {
    if (success) return "button_success";
    if (danger) return "button_danger";
    if (check) return "button_check";
  }
  return (
    <Link
      className={`buttonLink button_expandet ${style()}`}
      to={to || "/"}
      onClick={onClick}
    >
      <span>{children}</span>
    </Link>
  );
};

ButtonLink.defaultProps = {
  success: false,
  danger: false,
  check: false,
  to: "/"
};

export default ButtonLink;
