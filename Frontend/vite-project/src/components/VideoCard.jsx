import './videoCard.css';
const VideoCard = ({ video }) => (
  <div className="video-card">
    {/* Video Thumbnail */}
    <img
      src={video.thumbnailUrl}
      alt={video.title}
      className="video-thumbnail"
    />
    
    {/* Video Title */}
    <h3 className="video-title">{video.title}</h3>
    
    {/* Channel Name and View Count */}
    <p className="video-info">{video.channelName} • {video.views} views</p>
  </div>
);

export default VideoCard;
