import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";

const VideoLayout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        YOUTUBE_POPULAR_VIDEOS_API + process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const json = await res.json();
      setData(json.items);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-green-500 p-2 rounded-md grid grid-cols-12 gap-2">
      {data.map((item) => (
        <VideoCard
          title={item.snippet.title}
          thumbnail={item.snippet.thumbnails.medium}
          channel={item.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

export default VideoLayout;
