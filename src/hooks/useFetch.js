import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategory, loadData, titleSetter } from "../store/videoDataSlice";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";

const useFetch = (fetchVideos, returnState, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        fetchVideos + process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const json = await res.json();
      dispatch(action(json.items));
    };
    if (returnState.length === 0) {
      fetchData();
      if (fetchVideos === YOUTUBE_POPULAR_VIDEOS_API) {
        dispatch(titleSetter("Popular videos"));
      }
    }
  }, []);
  return;
};

export default useFetch;
