// ReactQL local state counter example

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import { Request } from "../../graphql";

type propTypes = {
  request: Request;
};

export const RequestDescription: React.FunctionComponent<propTypes> = ({
  request
}) => {
  return (
    <div className="row RequestDescription">
      {/* <div className="col-6 col-sm-4">Предыдущий слайд</div> */}

      <div className="col-12 col-sm-4 order-3 order-sm-2">
        <div className="ProjectCard__description">
          <div className="d-flex align-items-center">
            <div className="icon-wrapper">
              <img
                src="images/user-icon.svg"
                alt="user-icon"
                className="svg-icon"
              />
            </div>
            {request.participant.name ||
              `${request!.participant!.user!.surname} ${
                request!.participant!.user!.name
              }`}
          </div>

          {request.address && (
            <div className="d-flex align-items-center">
              <div className="icon-wrapper">
                <img
                  src="images/pointer.svg"
                  alt="pointer-icon"
                  className="svg-icon"
                />
              </div>
              {request.address}
            </div>
          )}

          <div className="d-flex align-items-center">
            <div className="icon-wrapper">
              <img
                src="images/goblet.svg"
                alt="goblet-icon"
                className="svg-icon"
              />
            </div>
            {request.competition.name}
          </div>
        </div>
      </div>

      {/* <div className="col-6 col-sm-4 order-2 order-sm-3">Следующий слайд</div> */}
    </div>
  );
};
