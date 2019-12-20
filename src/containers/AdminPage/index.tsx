import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import StatisticsOnFlowers from "./StatisticsOnFlowers";
import TopFive from "./TopFive";
import AdminMenu from "../../components/AdminComponents/AdminMenu";
import AdminDownloadCSVModal from "@/components/AdminComponents/AdminDownloadCSVModal";

interface IProps {}

type AdminProps = IProps & RouteComponentProps;

const AdminPage: React.FC<AdminProps> = ({ history }: AdminProps) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCSVModal, setActiveCSVModal] = useState(false);
  //For StatisticOnFlowers
  const [intervalCheck, setIntervalCheck] = useState("today");
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [activeInterval, setActiveInterval] = React.useState(false);
  //For Datepicker
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const competitionPeriod = [startDate, endDate];

  //Close||Open menu
  const onClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  // Close||Open AdminDownloadCSVModal
  const onClickButtonCSV = () => {
    setActiveCSVModal(!activeCSVModal);
  };

  // Go to AdminUserReuqestPage
  const onInfoRequest = (e: any) => {
    document.body.classList.add("hidden");
    history.push({
      pathname: `/admin/${e.activePayload[0].payload.id}`,
      state: { hasPrevRoute: true }
    });
  };

  React.useEffect(() => {
    if (intervalCheck !== "perInterval") {
      setSelectedPeriod(intervalCheck);
    }
  });

  const onSelectChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "perInterval") {
      setActiveInterval(true);
      setIntervalCheck(e.target.value);
    } else {
      setActiveInterval(false);
      setIntervalCheck(e.target.value);
    }
  };

  // const onRadioChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value === "perInterval") {
  //     setActiveInterval(true);
  //     setIntervalCheck(e.target.value);
  //   } else {
  //     setActiveInterval(false);
  //     setIntervalCheck(e.target.value);
  //   }
  // };

  const onChangeDatePicker = (value: string, date: Date) => {
    if (value === "start") {
      setStartDate(date);
    }
    if (value === "end") {
      setEndDate(date);
    }
  };

  const onSubmitInterval = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("complete submit");
  };

  return (
    <>
      <div className="row m-0 ff adminPage">
        <h1 className="admin_title">Административная панель</h1>
        <StatisticsOnFlowers
          onSubmitInterval={onSubmitInterval}
          onSelectChangePeriod={onSelectChangePeriod}
          onChangeDatePicker={onChangeDatePicker}
          selectedPeriod={selectedPeriod}
          activeInterval={activeInterval}
          intervalCheck={intervalCheck}
          competitionPeriod={competitionPeriod}
        />

        <TopFive onInfoRequest={onInfoRequest} />
        <AdminMenu
          activeMenu={activeMenu}
          onClickMenu={onClickMenu}
          onClickButtonCSV={onClickButtonCSV}
        />
        <AdminDownloadCSVModal
          activeCSVModal={activeCSVModal}
          onClickButtonCSV={onClickButtonCSV}
          onChangeDatePicker={onChangeDatePicker}
          competitionPeriod={competitionPeriod}
        />
      </div>
    </>
  );
};

export default withRouter(AdminPage);
