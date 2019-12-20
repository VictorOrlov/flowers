import React from "react";
import { ReactLeafletMap } from "@/components/RequestModal/Map";
import LineGraphic from "../LineGraphic";
import Button from "@/components/Button/Button";
// Заглушка. Закинуть данные реквеста
import { fakeAdmin } from "@/fakeDada/fakeAdmin";
import { fakeWinnersPreviousYear } from "@/fakeDada";
import { Request } from "@/graphql";

const graphicVoice = fakeAdmin.graphic_voices_and_request.perMonth;
const fakePhoto = fakeWinnersPreviousYear[0].request.photos;

interface IProps {
  request: Request;
  onGoToRequest: (e: React.MouseEvent<HTMLElement>) => void;
  onClickPhotoRequest: (e: React.MouseEvent<HTMLElement>) => void;
  bomerangInParent: (value: string) => void;
}

const UserChartsForAdmin: React.FC<IProps> = ({
  request,
  onGoToRequest,
  onClickPhotoRequest,
  bomerangInParent
}) => {
  const popupRequest = () => (
    <>
      <span className="section_text">
        <strong>адрес: </strong>
        {request!.address}
      </span>{" "}
      <br />
      <Button onClick={onGoToRequest} blue>
        Смотреть
      </Button>
    </>
  );

  return (
    <div className="col-12">
      <div className="row m-0">
        <div className="col-md-5 userChartsForAdmin_dashboards">
          <ReactLeafletMap
            request={request!}
            popup={popupRequest()}
            height="300px"
          />
        </div>
        <div className="col-md-7 userChartsForAdmin_dashboards">
          <LineGraphic
            data={graphicVoice}
            title="Статистика голосов за участника"
          />
        </div>
        <div className="col-md-12 userChartsForAdmin">
          <div className="col-12 userChartsForAdmin_header">
            <h3>Фотографии заявки</h3>
          </div>

          <div className="col-12 userChartsForAdmin_body">
            <div className="row m-0">
              {fakePhoto.map((item: any, index: number) => {
                return (
                  <div
                    className="col-md-4 userChartsForAdmin_body_children"
                    key={item.id}
                    onClick={() => onClickPhotoRequest(item)}
                  >
                    <img src={item.url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChartsForAdmin;
