import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoPlayback = () => {
  const [search] = useSearchParams();
  console.log(search.get("v"));

  return <div>VideoPlayback</div>;
};

export default VideoPlayback;
