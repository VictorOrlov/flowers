import React from "react";

type propTypes = {
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export const Modal: React.FunctionComponent<propTypes> = props => {
  const { onClose, children } = props;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog">
        {/*<div className="modal-content">*/}
        {children}
        {/*</div>*/}
      </div>
    </div>
  );
};
