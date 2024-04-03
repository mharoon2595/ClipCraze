import React from "react";
import { useSelector } from "react-redux";

const VideoList = ({ video, onClick }) => {
  return (
    <>
      <div className="my-1 mx-2 cursor-pointer" onClick={onClick}>
        <div className="flex w-full p-1 gap-2 h-35 bg-slate-200 border border-black rounded-md">
          <img
            src={video.snippet.thumbnails.default.url}
            className="w-24 h-18 object-cover"
          />
          <div className="flex flex-col justify-center text-nowrap overflow-hidden">
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
