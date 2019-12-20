import * as React from "react";
import mayor from "../../../images/mayor.jpg";

const MayorCol: React.FC = () => (
  <div className="col-12 col-sm-12 col-md-4 d-none d-sm-block">
    <div className="mayor_column">
      <div className="mayor_card">
        <div className="mayor_img">
          <img src={mayor} alt="mayor" />
        </div>
        <div className="mayor_name">
          <h3>Ильсур</h3>
          <h3>Метшин</h3>
          <h4>Мэр города</h4>
        </div>
      </div>

      <p className="mayor_text">
        Ухоженные деревья, качественные газоны и цветочные композиции стали
        нормой для нашего города и его визитной карточкой. Цветы украшают наш
        город, создавая особое светлое настроение его жителям и гостям.
        Благодаря проекту «Цветущая Казань» город приобрел целостный и
        привлекательный облик цветущего мегаполиса. Отрадно, что к нему
        подключились не только городские предприятия, представители бизнеса, но
        и обычные горожане. В проекте «Цветущая Казань» не может быть
        проигравших. Здесь победителями будем мы все.
      </p>
    </div>
  </div>
);

export default MayorCol;
