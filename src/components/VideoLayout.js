import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../store/videoDataSlice";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const VideoLayout = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.videoData.data.items);
  const title = useSelector((state) => state.videoData.data.title);

  useFetch(YOUTUBE_POPULAR_VIDEOS_API, data, loadData);

  const videoPlayer = (id) => {
    console.log("NAVIGATE BUDDY");
    if (id.videoId) {
      navigate(`/watch?v=${id.videoId}`);
    } else {
      navigate(`/watch?v=${id}`);
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="fixed z-10 h-10 p-1 bg-white w-full">{title}</div>
        </div>
        <div className="h-10"></div>
        <div className="bg-green-500 p-2 rounded-md grid grid-cols-12 gap-2">
          {data.map((item) => (
            <VideoCard
              key={item.id.videoId ? item.id.videoId : item.id}
              title={item.snippet.title}
              thumbnail={item.snippet.thumbnails.medium}
              channel={item.snippet.channelTitle}
              onClick={() => videoPlayer(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoLayout;
