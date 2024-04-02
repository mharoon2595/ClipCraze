import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    }
  }, []);
  return;
};

export default useFetch;
