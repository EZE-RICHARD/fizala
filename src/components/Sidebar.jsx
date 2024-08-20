/* The possibilties given to you, depends on the power of God in you and not the power of God 

fellowship intiution and communion
*/

import React, { useState } from "react";
import mainLogo from "/src/assets/FizalaLogo.png";
import "./styles/sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  BiSolidDashboard,
  BiSolidStore,
  BiSolidBoltCircle,
} from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaFolderOpen } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { HiUserGroup } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import LogOutBtn from "./LogOutBtn";
import RoomMateBtn from "./RoomMateBtn";

const SideBar = () => {
  const [activePath, setActivePath] = useState("/dashboard"); // Default active link

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  const navigation = [
    { name: "Dashboard", path: "/dashboard", icon: <BiSolidDashboard /> },
    { name: "My Listings", path: "mylistings", icon: <TfiMenuAlt /> },
    { name: "All Listings", path: "/all-listings", icon: <FaFolderOpen /> },
    { name: "My Stores", path: "/my-stores", icon: <BiSolidStore /> },
    {
      name: "Distress Sales 🔥",
      path: "/distress-sales",
      icon: <BiSolidBoltCircle />,
    },
    { name: "Wallet", path: "/wallet", icon: "🤑" },
    { name: "Analytics", path: "/analytics", icon: <DiGoogleAnalytics /> },
    {
      name: "Affiliate Program",
      path: "/affiliate-program",
      icon: <HiUserGroup />,
    },
    { name: "Profile", path: "/profile", icon: <CgProfile /> },
  ];

  const classLink = ({ isActive }) => (isActive ? "activeLink navLink" : "text-decoration-none text-dark navLink");

  return (
    <aside className="sideBar">
      <div className="brand">
        <img src={mainLogo} alt="Main Logo" className="p-md-4" />
      </div>
      <nav className="mt-2 mt-md-4">
        <ul className="list-unstyled">
          {navigation.map(({ name, path, icon }) => (
            <li
              key={path}
              onClick={() => handleLinkClick(path)}
              className={activePath === path ? "bg-white" : ""}
            >
              <NavLink to={path} className={classLink} end>
                {icon} {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <section className="footBtns h1">
          <RoomMateBtn />
          <div className="mt-2 mt-md-3">
            <LogOutBtn />
          </div>
        </section>
      </nav>
    </aside>
  );
};

export default SideBar;
