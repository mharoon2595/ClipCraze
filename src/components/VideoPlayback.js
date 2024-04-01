import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoPlayback = () => {
  const [search] = useSearchParams();

  return (
    <div className="mx-10 my-5 w-[800px] h-[600px]">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${search.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
