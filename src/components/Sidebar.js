import React from "react";
import { YOUTUBE_CATEGORIES } from "../constants";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import { loadCategory, loadData, titleSetter } from "../store/videoDataSlice";

const Sidebar = () => {
  const data = useSelector((state) => state.videoData.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        YOUTUBE_CATEGORIES + process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const json = await res.json();

      dispatch(loadCategory(json.items));
    };
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  const homeHandler = async () => {
    const res = await fetch(
      YOUTUBE_POPULAR_VIDEOS_API + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await res.json();
    dispatch(loadData(json.items));
    dispatch(titleSetter("Popular Videos"));
  };

  return (
    <div className="fixed left-0 bg-slate-200 p-4 overflow-y-auto h-full">
      <p>Categories:</p>
      <div
        className="bg-slate-400 rounded-md my-2 p-2 cursor-pointer"
        onClick={homeHandler}
      >
        Home
      </div>
      {data.map((item) => (
        <Categories key={item.id} items={item.snippet.title} />
      ))}
    </div>
  );
};

export default Sidebar;
