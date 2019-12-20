import React, { useState } from "react";
import { Modal } from "../../components/Modal";
import { ModalHeader } from "../../components/Modal/ModalHeader";
import Swiper from "react-id-swiper";
import { Winner } from "../../graphql";
import ArrowButtonGroup from "../Button/ArrowButtonGroup";

type propTypes = {
  winner: Winner | null;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export const WinnerModal: React.FunctionComponent<propTypes> = ({
  winner,
  onClose
}) => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div
        className="modal-content winner-modal"
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader onClose={onClose} />
        <Swiper getSwiper={updateSwiper}>
          {winner!.request.photos.map(photo => (
            <div key={photo.id}>
              <div>
                <img src={photo.url} />
              </div>
            </div>
          ))}
        </Swiper>
        {winner!.request.photos.length > 1 && (
          <ArrowButtonGroup goNext={goNext} goPrev={goPrev} />
        )}
      </div>
    </Modal>
  );
};
