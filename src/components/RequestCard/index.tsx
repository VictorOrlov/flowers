import React from "react";

type propTypes = {
  request: {
    title: string;
    address?: string;
    competition: string;
    voicesCount?: number;
    photos?: string;
  };

  className: string;
};

const RequestCard: React.FunctionComponent<propTypes> = ({
  request: { title, address, competition, voicesCount, photos },
  className
}) => {
  return (
    <div className={`ProjectCard ${className}`}>
      <div className="ProjectCard__img">
        <img className="img-fluid" src={photos ? photos : "images/gerb.svg"} />
        {voicesCount !== undefined && (
          <>
            <div className="voiceCount"></div>
            <span className="value_voiceCount">{voicesCount}</span>
          </>
        )}
      </div>
      <div className="ProjectCard__description">
        <div className="d-flex align-items-center">
          <div className="icon-wrapper">
            <img
              src="images/user-icon.svg"
              alt="user-icon"
              className="svg-icon"
            />
          </div>
          {title}
        </div>
        {address && (
          <div className="d-flex align-items-center">
            <div className="icon-wrapper">
              <img
                src="images/pointer.svg"
                alt="pointer-icon"
                className="svg-icon"
              />
            </div>
            {address}
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
          {competition}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
