import * as React from "react";
import TopBar from "./top-bar";
import HeaderSection from "./header-section";
import { FakeUserType } from "../../fakeDada/fakeUsers";

interface IProps {
  currentUser: FakeUserType;
  adminOn?: boolean;
}

const Header: React.FunctionComponent<IProps> = ({
  currentUser,
  adminOn
}: IProps) => (
  <>
    <TopBar currentUser={currentUser} adminOn={adminOn} />
    <HeaderSection currentUser={currentUser} />
  </>
);

export default Header;
