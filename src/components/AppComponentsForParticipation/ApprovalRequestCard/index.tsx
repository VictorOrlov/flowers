import * as React from "react";

interface IProps {
  request: any;
}

const ApprovalRequestCard: React.FC<IProps> = ({ request }: IProps) => {
  function style() {
    switch (request.state) {
      case "approved":
        return "approval_header_succes";
      case "created":
      case "updated":
        return "approval_header_check";
      case "declined":
      case "deleted":
      case "deleted_for_new_request":
        return "approval_header_danger";
    }
  }
  return (
    <div className="col-11 col-md-5 approval_request_card">
      <div className={`approval_header ${style()}`}>
        <span>{request.competition.name}</span>
      </div>
      <div className="row cell_card">
        <div className="col-3">Автор:</div>
        <div className="col-9">
          <strong>
            {request.participant.name ||
              `${request.participant.user.name} ${request.participant.user.surname}`}
          </strong>
        </div>
      </div>
      <hr className="dashed_hr" />
      <div className="row cell_card">
        <div className="col-3">Адрес:</div>
        <div className="col-9">
          <strong>{request.address}</strong>
        </div>
      </div>
      <hr className="dashed_hr" />
      <div className="row cell_card">
        <div className="col-3">Описание:</div>
        <div className="col-9">
          <strong>{request.description}</strong>
        </div>
      </div>

      <div className="row photos_request_card">
        {request.photos.map(({ id, url }: { id: number; url: string }) => (
          <div className="col-12 col-md-4 photos_request_card_img" key={id}>
            <img src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalRequestCard;
