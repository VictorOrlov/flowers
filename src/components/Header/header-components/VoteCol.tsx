import * as React from "react";
import ButtonLink from "../../../components/Button/ButtonLink";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { FakeUserType } from "../../../fakeDada/fakeUsers";

interface IProps {
  requestsCount?: React.ReactText;
  voicesCount?: React.ReactText;
  currentUser?: FakeUserType;
}

type VoteProps = IProps & RouteComponentProps;

export const VoteCol: React.SFC<VoteProps> = (props: VoteProps) => {
  const { currentUser, requestsCount, location, voicesCount } = props;
  function showParticBtn() {
    if (currentUser) {
      if (currentUser.participant) {
        return null;
      }
      return (
        <>
          <span className="vote_unit">или</span>
          <div className="new_nomination">
            <ButtonLink
              to="#TakePart"
              danger
              onClick={e => {
                e.preventDefault();
                return window.scrollTo(0, 9000);
              }}
            >
              {" "}
              Участвовать в конкурсе{" "}
            </ButtonLink>
          </div>
        </>
      );
    }
    return (
      <div className="new_nomination">
        <ButtonLink
          to="#TakePart"
          success
          onClick={e => {
            e.preventDefault();
            return window.scrollTo(0, 9000);
          }}
        >
          {" "}
          Принять участие{" "}
        </ButtonLink>
      </div>
    );
  }
  return (
    <div className="col-12 col-sm-6 col-md-5">
      <div className="vote_column">
        <div className="vote">
          <h3 className="vote_title">на текущий момент подано</h3>
          <p>
            <span className="vote_counter">{requestsCount} </span>
            <span className="vote_unit">заявок</span>
          </p>
          <h3 className="vote_title">проголосовало</h3>
          <p>
            <span className="vote_counter">{voicesCount} </span>
            <span className="vote_unit">жителя города</span>
          </p>
          {currentUser && currentUser.remainVoices ? (
            <div className="new_nomination">
              <ButtonLink to="/" success>
                {" "}
                Голосовать{" "}
              </ButtonLink>
            </div>
          ) : null}
          {location.pathname === "/" && (
            <>
              {showParticBtn()}
              <div className="new_nomination">
                <ButtonLink to="/flowerfest" danger>
                  {" "}
                  "Цветочный фестиваль"
                </ButtonLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

VoteCol.defaultProps = {
  requestsCount: 0,
  voicesCount: 0
};

export default withRouter(VoteCol);
