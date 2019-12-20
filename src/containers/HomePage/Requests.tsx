import React from "react";
import { Request } from "../../graphql";
import RequestCard from "../../components/RequestCard";

type propTypes = {
  requests: Array<Request>;
  onClick: (request: Request) => void;
};
export const Requests: React.FC<propTypes> = props => {
  const { requests, onClick } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          {requests!.map(request => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={request.id}
              onClick={() => onClick(request)}
            >
              <RequestCard
                className="request"
                request={{
                  title:
                    request.participant.name ||
                    `${request!.participant!.user!.surname} ${
                      request!.participant!.user!.name
                    }`,
                  address: request.address,
                  competition: request.competition.name,
                  voicesCount: request.voicesCount
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
