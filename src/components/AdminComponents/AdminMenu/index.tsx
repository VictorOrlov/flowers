import React, { useState } from "react";
import Button from "@/components/Button/Button";

interface IProps {
  activeMenu: boolean;
  onClickMenu(): void;
  onClickButtonCSV(): void;
}

const AdminMenu: React.FC<IProps> = ({
  activeMenu,
  onClickMenu,
  onClickButtonCSV
}) => {
  return (
    <>
      <div
        className="admin_burger"
        onClick={onClickMenu}
        style={{ marginRight: !activeMenu ? "0" : "-30vw" }}
      />
      <div
        className="admin_menu"
        style={{ marginRight: activeMenu ? "0" : "-30vw" }}
      >
        <div className="admin_menu_overlay">
          <div className="admin_menu_closer" onClick={onClickMenu} />
          <h3 className="ta-c m-0 p-4">Легенда</h3>
          <div className="admin_menu_legend">
            <div style={{ backgroundColor: "#ff7b4c" }}>
              <div></div>
            </div>
            <span>Голоса</span>
          </div>
          <div className="admin_menu_legend">
            <div style={{ backgroundColor: "#90c679" }}>
              <div></div>
            </div>
            <span>Участники</span>
          </div>

          <div className="admin_menu_btnCSV">
            <Button blue onClick={onClickButtonCSV}>
              Скачать статистику в .csv
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
