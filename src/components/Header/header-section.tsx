import * as React from "react";
import LogoCol from "./header-components/LogoCol";
import VoteCol from "./header-components/VoteCol";
import MayorCol from "./header-components/MayorCol";
import { useHeaderQuery } from "../../graphql";
import { FakeUserType } from "../../fakeDada/fakeUsers";

interface IProps {
  currentUser: FakeUserType;
}

const HeaderSection: React.FC<IProps> = ({ currentUser }: IProps) => {
  const { data, error, loading } = useHeaderQuery({
    variables: {
      search: null,
      sort: null,
      competitionId: null,
      page: null
    }
  });
  const insCount = (countName: string) => {
    if (error) {
      return <span>Error</span>;
    }

    if (loading) {
      return (
        <span className="loader_count">
          <span className="line_loader_count"></span>
          <span className="line_loader_count"></span>
          <span className="line_loader_count"></span>
        </span>
      );
    }
    return data!.startPage[countName!];
  };
  return (
    <div className="section_wrapper">
      <div className="row">
        <LogoCol />
        <VoteCol
          requestsCount={insCount("requestsCount")}
          voicesCount={insCount("voicesCount")}
          currentUser={currentUser}
        />
        <MayorCol />
      </div>
    </div>
  );
};

export default HeaderSection;
