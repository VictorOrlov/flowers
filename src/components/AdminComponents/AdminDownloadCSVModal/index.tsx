import React from "react";
import Button from "@/components/Button/Button";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";

interface IProps {
  activeCSVModal: boolean;
  onClickButtonCSV: () => void;
  competitionPeriod: Array<Date>;
  onChangeDatePicker: (value: string, date: Date) => void;
}

const AdminDownloadCSVModal: React.FC<IProps> = ({
  activeCSVModal,
  onClickButtonCSV,
  competitionPeriod,
  onChangeDatePicker
}) => {
  const [activeInterval, setActiveInterval] = React.useState(false);
  const onChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "perInterval") {
      setActiveInterval(true);
    } else {
      setActiveInterval(false);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const startFest = new Date("November 9, 2019 03:24:00");
  return (
    <div
      className="adminDownloadCSVModal"
      style={{ marginTop: activeCSVModal ? "0" : "70vh" }}
    >
      <button
        className="adminDownloadCSVModal_closer"
        onClick={onClickButtonCSV}
      >
        X
      </button>
      <h3>Parameters</h3>
      <div className="adminDownloadCSVModal_form">
       <form {/*onSubmit={onSubmitInterval}*/} className={"statOnFlowers_header_form"}> 
        <div className="d-flex ">
          {/* <label htmlFor="period" className="admin_subtitle">Временной отрезок: </label> */}
          <span className="admin_subtitle statOnFlowers_header_subtitle">
            Временной отрезок:{" "}
          </span>
          <select
            // id={'period'}
            // value={intervalCheck}
            className={"statOnFlowers_header_select"}
            // onChange={onSelectChangePeriod}
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
      </form>
      </div>
    </div>
  );
};

export default AdminDownloadCSVModal;


{/* <form onSubmit={onSubmit}>
          <div>
            <span className="admin_subtitle">Временной отрезок: </span>
            <input
              id="send-today"
              name="period"
              value="today"
              type="radio"
              onChange={onChangePeriod}
            />
            <label htmlFor="send-today">день</label>
            <input
              id="send-perweek"
              name="period"
              value="perWeek"
              type="radio"
              onChange={onChangePeriod}
            />
            <label htmlFor="send-perweek">неделя</label>
            <input
              id="send-permounth"
              name="period"
              value="perMouth"
              type="radio"
              onChange={onChangePeriod}
            />
            <label htmlFor="send-permounth">месяц</label>
            <input
              id="send-interval"
              name="period"
              value="perInterval"
              type="radio"
              onChange={onChangePeriod}
            />
            <label htmlFor="send-interval">интервал</label>
          </div>
          <div
            className="adminDownloadCSVModal_form_interval"
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
          </div>
          <div>
            <span className="admin_subtitle">Статистика по: </span>
            <input id="send-all" name="selectStat" value="all" type="radio" />
            <label htmlFor="send-all">всему</label>
            <input
              id="send-voice"
              name="selectStat"
              value="voice"
              type="radio"
            />
            <label htmlFor="send-voice">голосам</label>
            <input
              id="send-requests"
              name="selectStat"
              value="requests"
              type="radio"
            />
            <label htmlFor="send-requests">участникам</label>
          </div>
          <Button submit blue>
            Искать
          </Button>
        </form> */}
