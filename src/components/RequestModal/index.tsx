import React from "react";
import { Modal } from "../../components/Modal";
import { ModalHeader } from "../../components/Modal/ModalHeader";
import Swiper from "react-id-swiper";
import { RequestDescription } from "./RequestDescription";
import { ReactLeafletMap } from "./Map";
import { Request } from "../../graphql";
import Button from "../Button/Button";
import { FakeUserType } from "../../fakeDada/fakeUsers";
import { useCreateVoiceMutation, useDestroyVoiceMutation } from "../../graphql";

interface IProps {
  request: Request | null;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  currentUser: FakeUserType;
  paramsID: number;
}

export const RequestModal: React.FunctionComponent<IProps> = ({
  request,
  onClose,
  currentUser,
  paramsID
}: IProps) => {
  const [requestId] = useCreateVoiceMutation();
  const [voiceId] = useDestroyVoiceMutation();

  const addVoice = () => {
    requestId({ variables: { requestId: paramsID } }).then(() => {
      console.log("Add Voice");
    });
  };

  function showBtn(request: any) {
    let result: any = currentUser.voices.filter(
      (key: any) => key.request.id === request.id
    );

    if (currentUser) {
      if (currentUser.remainVoices) {
        if (result.length === 0)
          return (
            <div className="wrap_voiceBtn">
              <Button green large onClick={addVoice}>
                Отдать свой голос
              </Button>
            </div>
          );

        const deleteVoice = () => {
          voiceId({ variables: { voiceId: result[0].id } }).then(() => {
            console.log("Delete Voice");
          });
        };

        return (
          <div className="wrap_voiceBtn">
            <Button blue large onClick={deleteVoice}>
              Отозвать свой голос
            </Button>
          </div>
        );
      } else {
        if (result.length !== 0)
          return (
            <div className="wrap_voiceBtn">
              <Button blue large>
                Отозвать свой голос
              </Button>
            </div>
          );
      }
    }
    return null;
  }
  return (
    <Modal onClose={onClose}>
      <div
        className="modal-content request-modal"
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader onClose={onClose} />
        <Swiper>
          {request!.photos!.map(photo => (
            <div key={photo.id}>
              <img src="https://i0.wp.com/www.disneytouristblog.com/wp-content/uploads/2018/09/minnie-mickey-topiary-flower-garden-epcot-disney-world-744.jpg?resize=800%2C565&ssl=1" />
            </div>
          ))}
        </Swiper>
        {request && <RequestDescription request={request} />}
        {showBtn(request)}
        <div style={{ overflow: "hidden" }}>
          <ReactLeafletMap request={request!} />
        </div>
      </div>
    </Modal>
  );
};
