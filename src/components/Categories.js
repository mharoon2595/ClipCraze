import React from "react";
import { YOUTUBE_SEARCH } from "../constants";
import { loadData, titleSetter } from "../store/videoDataSlice";
import { useDispatch, useSelector } from "react-redux";

const Categories = ({ items }) => {
  const dispatch = useDispatch();

  const clickHandler = async (keyword) => {
    const fetchData = await fetch(
      YOUTUBE_SEARCH(keyword) + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const res = await fetchData.json();
    dispatch(loadData(res.items));
    dispatch(titleSetter(items));
  };

  return (
    <div
      className="bg-slate-400 rounded-md my-2 p-2 cursor-pointer active:bg-green-500"
      onClick={() => {
        clickHandler(items);
      }}
    >
      {items}
    </div>
  );
};

export default Categories;
