import React from "react";
import DatePicker from "react-datepicker";
import Button from "@/components/Button/Button";
import { ru } from "date-fns/locale";

interface IProps {
  onSubmitInterval: (e: React.FormEvent<HTMLElement>) => void;
  onSelectChangePeriod: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDatePicker: (value: string, date: Date) => void;
  intervalCheck: string;
  activeInterval: boolean;
  competitionPeriod: Array<Date>;
}

const HeaderStatOnFlow: React.FC<IProps> = ({
  onSubmitInterval,
  // onRadioChangePeriod,
  onSelectChangePeriod,
  intervalCheck,
  activeInterval,
  competitionPeriod,
  onChangeDatePicker
}) => {
  const startFest = new Date("November 9, 2019 03:24:00");

  return (
    <div className={"w-100"}>
      <form onSubmit={onSubmitInterval} className={"statOnFlowers_header_form"}>
        <div className="d-flex ">
          {/* <label htmlFor="period" className="admin_subtitle">Временной отрезок: </label> */}
          <span className="admin_subtitle statOnFlowers_header_subtitle">
            Временной отрезок:{" "}
          </span>
          <select
            // id={'period'}
            value={intervalCheck}
            className={"statOnFlowers_header_select"}
            onChange={onSelectChangePeriod}
          >
            <option value="today">день</option>
            <option value="perWeek">неделя</option>
            <option disabled value="perMouth">
              месяц
            </option>
            <option value="perInterval">интервал</option>
          </select>
        </div>
        <div
          className="statOnFlowers_header_interval"
          style={{ display: activeInterval ? "block" : "none" }}
        >
          <span>от:</span>
          <DatePicker
            selected={competitionPeriod[0]}
            locale={ru}
            placeholderText="Нажмите, чтобы выбрать дату"
            onChange={date => onChangeDatePicker("start", date!)}
            minDate={startFest}
            maxDate={new Date()}
            selectsStart
            startDate={competitionPeriod[0]}
            endDate={competitionPeriod[1]}
          />
          <span>до:</span>
          <DatePicker
            selected={competitionPeriod[1]}
            locale={ru}
            placeholderText="Нажмите, чтобы выбрать дату"
            onChange={dat => onChangeDatePicker("end", dat!)}
            minDate={competitionPeriod[0] || startFest}
            maxDate={new Date()}
            selectsEnd
            endDate={competitionPeriod[1]}
          />
          <Button submit blue>
            Искать
          </Button>
        </div>
        {/* <div className="d-inline-block m-5">
          <span className="admin_subtitle">Временной отрезок: </span>
          <input
            id="toggle-today"
            name="period"
            value="today"
            type="radio"
            checked={intervalCheck === "today"}
            onChange={onRadioChangePeriod}
          />
          <label htmlFor="toggle-today">день</label>
          <input
            id="toggle-perweek"
            name="period"
            value="perWeek"
            type="radio"
            checked={intervalCheck === "perWeek"}
            onChange={onRadioChangePeriod}
          />
          <label htmlFor="toggle-perweek">неделя</label>
          <input
            id="toggle-permounth"
            name="period"
            value="perMouth"
            type="radio"
            disabled
            // checked={intervalCheck === "perWeek"}
            // onChange={onRadioChangePeriod}
          />
          <label htmlFor="toggle-permounth">месяц</label>
          <input
            id="toggle-perinterval"
            name="period"
            value="perInterval"
            type="radio"
            checked={intervalCheck === "perInterval"}
            onChange={onRadioChangePeriod}
          />
          <label htmlFor="toggle-perinterval">интервал</label>
        </div>
        <div
          className="statOnFlowers_header_interval"
          style={{ display: activeInterval ? "block" : "none" }}
        >
          <span>от:</span>
          <DatePicker
            selected={competitionPeriod[0]}
            locale={ru}
            placeholderText="Нажмите, чтобы выбрать дату"
            onChange={date => onChangeDatePicker("start", date!)}
            minDate={startFest}
            maxDate={new Date()}
            selectsStart
            startDate={competitionPeriod[0]}
            endDate={competitionPeriod[1]}
          />
          <span>до:</span>
          <DatePicker
            selected={competitionPeriod[1]}
            locale={ru}
            placeholderText="Нажмите, чтобы выбрать дату"
            onChange={dat => onChangeDatePicker("end", dat!)}
            minDate={competitionPeriod[0] || startFest}
            maxDate={new Date()}
            selectsEnd
            endDate={competitionPeriod[1]}
          />
          <Button submit blue>
            Искать
          </Button>
        </div> */}
      </form>
    </div>
  );
};
export default HeaderStatOnFlow;
