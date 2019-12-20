import * as React from "react";
// import { Link } from 'react-router-dom';
import footer_logo from "@/images/svg-gerb-icon.svg";

function year() {
  return new Date().getFullYear();
}

const Footer: React.FC<{}> = () => (
  <footer>
    <div className="row">
      <div className="col-md-2 offset">
        <ul>
          <li className="menu_title">Ссылки:</li>
          <li>
            <a href="http://www.kzn.ru/" target="_blank">
              Мэрия Казани
            </a>
          </li>
          <li>
            "По всем вопросам:"
            <br />
            <a href="mailto:support.kazan@tatar.ru">support.kazan@tatar.ru</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 concats">
        <ul>
          <li className="menu_title sm_hidden">Документы:</li>
          <li>
            <a href="/docs/polozhenie_o_konkurse_2019.pdf" target="_blank">
              Положение о конкурсе
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 sm_order">
        <div className="footer_logo">
          <img src={footer_logo} alt="footer logo" />
        </div>
      </div>
      <div className="col-md-5 concats">
        <ul>
          <li className="menu_title">
            "Организатором конкурса «Цветущая Казань» в {year()} году является
            Исполнительный комитет г.Казани"
          </li>
          <li></li>
          <li>© Цветущая Казань, {year()}</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
