import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/gerb.svg";
import logo_text from "../../../images/text.svg";

const LogoCol: React.FC = () => (
  <div className="col-12 col-sm-6 col-md-3">
    <div className="logo_column">
      <Link to="/">
        <div className="logo_svg">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo_text">
          <img src={logo_text} alt="logo text" />
        </div>
      </Link>
    </div>
  </div>
);

export default LogoCol;
