import React from "react";

interface IProps {
  request: any;
}

const UserInformForAdmin: React.FC<IProps> = ({ request }) => {
  const participant = request!.participant;
  const user = request!.participant.user!;

  return (
    <div className="col-md-12 adminRequestModal_children">
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">Тип</div>
        <div className="col-9">
          {request!.participant.kind === "organization"
            ? "Организация"
            : "Частное лицо"}
        </div>
      </div>
      {participant.name && (
        <div className="row m-0 mb-2 adminRequestModal_children_informElement">
          <div className="col-3">Имя организации</div>
          <div className="col-9">
            {participant.name} {!user.name && `(id пользователя: ${user.id})`}
          </div>
        </div>
      )}
      {user.name && user.surname && (
        <div className="row m-0 mb-2 adminRequestModal_children_informElement">
          <div className="col-3">Ф.И пользователя</div>
          <div className="col-9">
            {`${user.name} ${user.surname} ${`(id пользователя: ${user.id})`}`}
          </div>
        </div>
      )}
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">Email</div>
        <div className="col-9">{user.email || "не указан"}</div>
      </div>
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">Телефон</div>
        <div className="col-9">{user.phone || "не указан"}</div>
      </div>
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">Адрес</div>
        <div className="col-9">{request!.address || "не указан"}</div>
      </div>
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">дата создания участия</div>
        <div className="col-9">{request!.createdAt}</div>
      </div>
      <div className="row m-0 mb-2 adminRequestModal_children_informElement">
        <div className="col-3">Номинация</div>
        <div className="col-9">{request!.competition.name}</div>
      </div>
    </div>
  );
};

export default UserInformForAdmin;
