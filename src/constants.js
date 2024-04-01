export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=50&chart=mostPopular&regionCode=IN&key=";

export const YOUTUBE_CATEGORIES =
  "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=";

export const YOUTUBE_SEARCH = (keyword) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=`;
};
