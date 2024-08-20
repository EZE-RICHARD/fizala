import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavigationBar from "../components/NavigationBar";
import "./styles/layout.scss"

const DashLayout = () => {
  return (
    <div className="DashBoardContainer">

      <aside className="SideMenu">
        <Sidebar className="" />
      </aside>

      <main className="mainContent">
        <NavigationBar className=""/>
        <Outlet />
      </main>

    </div>
  );
};

export default DashLayout;
