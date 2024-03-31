import React from "react";

const VideoCard = (props) => {
  const { title, thumbnail, channel } = props;
  console.log("image--->", thumbnail);
  return (
    <div className="col-span-4 bg-slate-200 rounded-lg p-2 ">
      <img src={thumbnail.url} className="w-full" />
      <p className="py-1">{title}</p>
      <p className="py-1">{channel}</p>
    </div>
  );
};

export default VideoCard;
