import React from "react";
import YandexShare from "react-yandex-share";

type propTypes = {
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export const ModalHeader: React.FC<propTypes> = ({ onClose }) => {
  return (
    <div className="modal-header">
      <YandexShare
        theme={{
          lang: "ru",
          services: "vkontakte,facebook,twitter"
        }}
      />
      <button onClick={onClose}>x</button>
    </div>
  );
};
