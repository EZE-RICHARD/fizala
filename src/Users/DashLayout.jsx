import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./styles/layout.scss"

const DashLayout = () => {
  return (
    <div className="DashBoardContainer">

      <aside className="SideMenu">
        <Sidebar />
      </aside>

      <main className="mainContent">
        <Outlet />
      </main>

    </div>
  );
};

export default DashLayout;
