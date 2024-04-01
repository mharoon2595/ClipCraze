import React from "react";
import logo from "../assets/ClipCraze.png";
import menuIcon from "../assets/menuIcon.png";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import { useDispatch } from "react-redux";
import { loadData } from "../store/videoDataSlice";
import { useNavigate } from "react-router-dom";
import { titleSetter } from "../store/videoDataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const homeHandler = async () => {
    navigate("/");
    const res = await fetch(
      YOUTUBE_POPULAR_VIDEOS_API + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await res.json();
    dispatch(loadData(json.items));
    dispatch(titleSetter("Popular Videos"));
  };

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
        <img
          className="w-full min-w-10 h-15 cursor-pointer"
          onClick={homeHandler}
          src={logo}
          alt="image"
        />
      </div>
      <div className="w-[80%] my-auto px-6">
        <input
          type="text"
          placeholder=" Search"
          className="border border-black w-full"
        />
      </div>
    </div>
  );
};

export default Header;
