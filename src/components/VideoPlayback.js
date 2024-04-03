import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import VideoList from "./VideoList";
import Comments from "./Comments";
import { commentsData } from "./data/comments";
import useFetch from "../hooks/useFetch";
import { loadData } from "../store/videoDataSlice";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";

const CommentsList = (props) => {
  return props.comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comments data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const VideoPlayback = () => {
  const [search] = useSearchParams();
  const videos = useSelector((state) => state.videoData.data.items);
  const data = useSelector((state) => state.videoData.data.items);
  const title = useSelector((state) => state.videoData.data.title);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  useFetch(YOUTUBE_POPULAR_VIDEOS_API, data, loadData);

  const videoPlayer = (id) => {
    console.log("NAVIGATE BUDDY");
    if (id.videoId) {
      navigate(`/watch?v=${id}`);
    } else {
      navigate(`/watch?v=${id}`);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-9 mx-2">
        <div className="mx-10 my-5 h-[500px]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${search.get("v")}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-10">
          Comments
          <CommentsList comments={commentsData} />
        </div>
      </div>
      <div className="col-span-3">
        <div className="font-semibold p-1">
          Other videos related to: {title}
        </div>
        {videos.map((video) => {
          if (video.id.videoId) {
            if (video.id.videoId !== search.get("v")) {
              return (
                <VideoList
                  video={video}
                  onClick={() => videoPlayer(video.id.videoId)}
                />
              );
            }
          } else {
            if (video.id !== search.get("v")) {
              return (
                <VideoList
                  video={video}
                  onClick={() => videoPlayer(video.id)}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default VideoPlayback;
