import React, { useState } from "react";
import { fakeAdmin } from "../../../fakeDada/fakeAdmin";
import BeLineDiagramm from "@/components/AdminComponents/BeLineDiagramm";
import BeLineGraphic from "@/components/AdminComponents/BeLineGraphic";
import RadarDiagramm from "@/components/AdminComponents/RadarDiagramm";
import HeaderStatOnFlow from "./HeaderStatOnFlow";

interface IProps {
  // data: any;
  onSubmitInterval: (e: React.FormEvent<HTMLElement>) => void;
  onSelectChangePeriod: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDatePicker: (value: string, date: Date) => void;
  selectedPeriod: string;
  activeInterval: boolean;
  intervalCheck: string;
  competitionPeriod: Array<Date>;
}

const statistics = fakeAdmin.new_voices_and_request;
const graphics = fakeAdmin.graphic_voices_and_request;
const clock = fakeAdmin.byTheClock;

const StatisticsOnFlowers: React.FC<IProps> = ({
  onSubmitInterval,
  onSelectChangePeriod,
  onChangeDatePicker,
  selectedPeriod,
  activeInterval,
  intervalCheck,
  competitionPeriod
}: IProps) => {
  return (
    <div className="col-12 statOnFlowers">
      <div className="row m-0">
        <div className="col-12 p-0 statOnFlowers_header">
          <HeaderStatOnFlow
            onSubmitInterval={onSubmitInterval}
            onSelectChangePeriod={onSelectChangePeriod}
            intervalCheck={intervalCheck}
            activeInterval={activeInterval}
            competitionPeriod={competitionPeriod}
            onChangeDatePicker={onChangeDatePicker}
          />
        </div>
        <div className="col-12 statOnFlowers_body">
          <div className="row m-0">
            <div className="col-5 statOnFlowers_body_children">
              <BeLineGraphic
                data={(graphics as any)[selectedPeriod]}
                title="График голосов и участников"
              />
            </div>

            <div className="col-4 statOnFlowers_body_children">
              <BeLineDiagramm
                data={(statistics as any)[selectedPeriod].competitions}
                title="Голоса и участники по номинациям"
              />
            </div>

            <div className="col-3 statOnFlowers_body_children">
              <RadarDiagramm
                data={(clock as any)[selectedPeriod]}
                title="По времени"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOnFlowers;
