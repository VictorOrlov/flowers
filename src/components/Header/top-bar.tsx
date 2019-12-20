import * as React from "react";
import gerb from "../../images/gerb.svg";
import { Link } from "react-router-dom";
import { FakeUserType } from "../../fakeDada/fakeUsers";
import ButtonLink from "../Button/ButtonLink";

interface IProps {
  currentUser: FakeUserType;
  // adminOn?: boolean;
}

const TopBar: React.SFC<IProps> = ({ currentUser }: IProps) => {
  const check = currentUser
    ? currentUser.roles.filter((item: any) => item === "support").length
    : null;
  return (
    <header>
      {/* admin */}
      {check !== 0 && (
        <div className="btn_admin">
          <ButtonLink check to="/admin">
            Admin
          </ButtonLink>
        </div>
      )}

      <Link to="/">
        <div className="gerb_header">
          <img src={gerb} alt="gerb" />
        </div>
      </Link>
      {currentUser && (
        <div className="last">
          <span className="last_userName">{currentUser.name}: </span>
          <span className="last_userRemainVoices">
            {currentUser.remainVoices ? currentUser.remainVoices : 0}
          </span>
        </div>
      )}
    </header>
  );
};

export default TopBar;
