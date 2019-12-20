import React from "react";
import { fakeAdmin } from "../../../fakeDada/fakeAdmin";
import LineDiagramm from "@/components/AdminComponents/LineDiagramm";

interface IProps {
  onInfoRequest?: (request: Request) => void;
}

const top = fakeAdmin.topFife;

const TopFive: React.FC<IProps> = ({ onInfoRequest }: IProps) => {
  return (
    <div className="col-12 topFive">
      <div className="row m-0">
        <div className="col-12 p-0 topFive_header admin_subtitle">
          Топ 5 по каждой номинации
        </div>
        <div className="col-12 topFive_body">
          <div className="row m-0">
            {top.map((item: any) => (
              <div className="col-md-2 topFive_body_children" key={item.id}>
                <LineDiagramm
                  title={item.name}
                  data={item.topParticipants.sort(
                    (a: any, b: any) => b.voicesCount - a.voicesCount
                  )}
                  onInfoRequest={onInfoRequest}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFive;
