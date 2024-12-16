
import './video.css';
const VideoGrid = ({ videos, onVideoClick }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div
        key={video.videoId}
          className="video-card"
          onClick={() => onVideoClick(video)}
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="video-thumbnail"
          />
          <h3 className="video-title">{video.title}</h3>
          <p className="video-info">
            {video.uploader} • {video.views} views
          </p>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;



