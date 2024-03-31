import React from "react";
import Sidebar from "./Sidebar";
import VideoLayout from "./VideoLayout";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 p-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-2">
        <VideoLayout />
      </div>
    </div>
  );
};

export default AppLayout;
