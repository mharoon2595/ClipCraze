import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../store/videoDataSlice";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const VideoLayout = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.videoData.data.items);
  const title = useSelector((state) => state.videoData.data.home);

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
        {title}
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
