import React from "react";
import { BsBellFill } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa6";
import "./styles/navigation.scss";
import SearchBar from "./SearchBar";
import SellBtn from "./SellBtn";
import MiniProfile from "./MiniProfile";

const NavigationBar = () => {
  return (
    
    <div className="headerNav">
      <div className="searchUIs">
        <SearchBar />
        <SellBtn />
      </div>

      
      <section className="profileAlerts">
        <span className="notes illustration">
          <BsBellFill />
          <span className="counter">0</span>
        </span>

        <span className="messages illustration">
          <BiSolidMessage />
          <span className="counter">0</span>
        </span>

        <span className="illustration">
          <FaBookmark />
        </span>
      </section>

      <MiniProfile />

      
    </div>
  );
};

export default NavigationBar;
