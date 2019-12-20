import React from "react";

interface IProps {
  onRadioChange(event: React.FormEvent<HTMLInputElement>): void;
  selected: string;
}

const Radio: React.FC<IProps> = ({ onRadioChange, selected }: IProps) => (
  <div className="wrapper-radio-dash">
    <input
      id="toggle-on"
      className="toggle toggle-left"
      name="toggle"
      value="voices"
      type="radio"
      checked={selected === "voices"}
      onChange={onRadioChange}
    />
    <label htmlFor="toggle-on" className="radio-dash">
      голосов
    </label>
    <input
      id="toggle-off"
      className="toggle toggle-right"
      name="toggle"
      value="participants"
      type="radio"
      checked={selected === "participants"}
      onChange={onRadioChange}
    />
    <label htmlFor="toggle-off" className="radio-dash">
      участников
    </label>
  </div>
);

export default Radio;
