import React from "react";

interface IProps {
  goPrev(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  goNext(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ArrowButtonGroup: React.FC<IProps> = ({ goNext, goPrev }: IProps) => {
  return (
    <div className="prev_next_group">
      <button onClick={goPrev} className="prev_next_group_btn">
        &#9668;
      </button>
      <button onClick={goNext} className="prev_next_group_btn">
        &#9658;
      </button>
    </div>
  );
};

export default ArrowButtonGroup;
