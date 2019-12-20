import React, { useState } from "react";
import { Modal } from "@/components/Modal";
import Swiper from "react-id-swiper";
// import { Winner } from "@/graphql";
import ArrowButtonGroup from "../../../components/Button/ArrowButtonGroup";

type propTypes = {
  winner: any;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  activePhoto: string;
};

export const PhotoRequestModal: React.FunctionComponent<propTypes> = ({
  winner,
  onClose,
  activePhoto
}) => {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    loop: true
    // centeredSlides: true,
  };

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
  //  console.log(winner.findIndex(i => i.id === activePhoto))
  const activeSlideKey = winner
    .findIndex((i: any) => i.id === activePhoto)
    .toString();
  return (
    <Modal onClose={onClose}>
      <div
        className="modal-content winner-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* <ModalHeader onClose={onClose} /> */}
        <button className="adminRequestModal_closer" onClick={onClose}>
          X
        </button>
        <Swiper
          getSwiper={updateSwiper}
          {...params}
          activeSlideKey={activeSlideKey}
        >
          {winner.map((photo: any, index: number) => (
            <div key={index}>
              <div>
                <img src={photo.url} />
              </div>
            </div>
          ))}
        </Swiper>
        {winner.length > 1 && (
          <ArrowButtonGroup goNext={goNext} goPrev={goPrev} />
        )}
      </div>
    </Modal>
  );
};
