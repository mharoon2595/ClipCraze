import React from "react";
import logo from "../assets/ClipCraze.png";
import menuIcon from "../assets/menuIcon.png";
import userIcon from "../assets/userIcon.png";

const Header = () => {
  return (
    <div className="sticky top-0 flex shadow-lg bg-slate-100">
      <div className="w-[5%] my-auto">
        <img
          className="w-full min-w-5 h-5 sm:h-10 p-1"
          src={menuIcon}
          alt="image"
        />
      </div>
      <div className="w-[15%]">
        <img className="w-full min-w-10 h-15" src={logo} alt="image" />
      </div>
      <div className="w-[75%] my-auto px-2">
        <input
          type="text"
          placeholder=" Search"
          className="border border-black w-full"
        />
      </div>
      <div className="w-[5%] my-auto px-2">
        <img className="w-full min-w-5 h-10  p-1" src={userIcon} alt="image" />
      </div>
    </div>
  );
};

export default Header;
