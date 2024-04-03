import React from "react";
import userIcon from "../assets/userIcon.png";

const Comments = ({ data }) => {
  return (
    <div>
      <div className="flex gap-1 bg-gray-200 p-2 rounded-md my-2">
        <img src={userIcon} className="w-6 h-6" />
        <div>
          <p>{data.name}</p>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
