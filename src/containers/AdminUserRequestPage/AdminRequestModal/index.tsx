import React from "react";
import { Request } from "../../../graphql";
import { withRouter, RouteComponentProps } from "react-router";
import UserInformForAdmin from "../../../components/AdminComponents/UserInformForAdmin";
import UserChartsForAdmin from "../../../components/AdminComponents/UserChartsForAdmin";
import { PhotoRequestModal } from "../PhotoRequestModal";
import { fakeWinnersPreviousYear } from "@/fakeDada";

const fakePhoto = fakeWinnersPreviousYear[0].request.photos;

interface IProps {
  request: Request | null;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  onGoToRequest: (e: React.MouseEvent<HTMLElement>) => void;
}

type RequestModalProps = IProps & RouteComponentProps;

const AdminRequestModal: React.FunctionComponent<RequestModalProps> = ({
  request,
  onClose,
  onGoToRequest
}: RequestModalProps) => {
  const [showPhotoRequest, setShowPhotoRequest] = React.useState(false);
  const [
    currentPhotoRequest,
    setCurrentPhotoRequest
  ] = React.useState<Request | null>(null);
  const [activePhoto, setActivePhoto] = React.useState("");

  const bomerangInParent = (value: string) => {
    setActivePhoto(value);
  };

  const onClickPhotoRequest = (e: any) => {
    // setCurrentPhotoRequest(winner);
    setShowPhotoRequest(true);
    document.body.classList.add("hidden");
    setActivePhoto(e.id);
  };

  const onClosePhotoRequest = () => {
    // setCurrentPhotoRequest(null);
    setShowPhotoRequest(false);
    document.body.classList.remove("hidden");
  };
  //  console.log(currentPhotoRequest)
  return (
    <div className="adminBackdrop" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <div className="adminRequestModal ff">
          <button className="adminRequestModal_closer" onClick={onClose}>
            X
          </button>
          <h3 className="section_title">Информация о участнике</h3>
          <div className="row m-0 justify-content-around">
            <UserInformForAdmin request={request} />
            <UserChartsForAdmin
              request={request!}
              onGoToRequest={onGoToRequest}
              onClickPhotoRequest={onClickPhotoRequest}
              bomerangInParent={bomerangInParent}
            />
          </div>

          {showPhotoRequest && (
            <PhotoRequestModal
              winner={fakePhoto}
              onClose={onClosePhotoRequest}
              activePhoto={activePhoto}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminRequestModal);
