import { useParams } from "react-router-dom";

const VideoPage = ({ videos }) => {
  const { videoId } = useParams();
  const video = videos.find((v) => v.videoId === videoId);

  if (!video) {
    return <h1>Video not found</h1>;
  }

  return (
    <div className="video-page">
      <h1 className="video-title">{video.title}</h1>
      <video controls width="100%">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="video-info">{video.uploader} • {video.views} views</p>
    </div>
  );
};

export default VideoPage;
