// VideoPlayer.js
import './videoplayer.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
// import CommentsSection from "./CommentsSection";
const VideoPlayer = () => {
    const location = useLocation();
    const { video } = location.state || {}; // Safe access to location.state

    if (!video) {
        return <div>Video not found</div>; // Display message if video data is missing
    }

    return (
        <>
        <Header/>
            <div className="video-player-page">
                <div className="video-section">
                    {/* Video Player */}
                    <div className="video-container">
    <video className="video-player" controls autoPlay>
      <source src={video.videoUrl} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
  
  {/* Video Thumbnail (image) */}
  <div >
    {/* <img src={video.thumbnailUrl} alt={video.title} className="thumbnail-image" /> */}
  </div>
                    
                    {/* Video Details */}
                    <div className="video-details">
                        <h2>{video.title}</h2>
                        <div className="video-meta">
                            <span>Uploaded by {video.uploader}</span> | 
                            <span> {video.views} views</span> | 
                            <span> {video.uploadDate}</span>
                        </div>
                        <div className="video-actions">
                            <button className="like-btn">
                                👍 {video.likes} Likes
                            </button>
                            <button className="dislike-btn">
                                👎 {video.dislikes} Dislikes
                            </button>
                        </div>
                        <p className="video-description">{video.description}</p>
                    </div>
                </div>

                {/* Related Videos Sidebar (optional) */}
                <div className="related-videos">
                    <h3>Related Videos</h3>
                    <div className="related-video-list">
                        {/* Placeholder for related videos, you can map from dummy data */}
                        <div className="related-video-item">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e8/7e/fa/e87efa6f-3d57-fb0f-55a1-aa42067ab0fb/cover.jpg/800x800cc.jpg" alt="Related Video" />
                            <h4>Daru Badnaam | Kamal Kahlon & Param Singh | Official Video | Pratik Studio | Latest Punjabi Songs</h4>
                        </div>
                        <div className="related-video-item">
                            <img src="https://www.hinditracks.in/wp-content/uploads/2022/05/ek-dilrba-hai-bewafaa.jpeg" alt="Related Video" />
                            <h4>Ek Dilruba Hai | Bewafaa | Akshay Kumar, Kareena Kapoor | Udit Narayan |Mera Dil Jis Dil Pe Fida Hai

</h4>
                        </div>
                        <div className="related-video-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJboKIroUHJLqx5ynWl9rT3AVavsT_oicQNw&s"/>
                            <h4>HTML Tutorial for Beginners | Complete HTML with Notes </h4>
                        </div>
                        <div className="related-video-item">
                            <img src="https://m.media-amazon.com/images/I/51Q-qZ6GjeL._AC_UF1000,1000_QL80_.jpg"/>
                            <h4>Learn HTML in 1 hour 

</h4>
                        </div>
                        <div className="related-video-item">
                            <img src="https://i1.sndcdn.com/artworks-000221587984-w2dfgx-t500x500.jpg"/>
                            <h4>Afghan Jalebi (Ya Baba) FULL VIDEO Song | Phantom | Saif Ali Khan Katrina Kaif Pritam Asrar T-Series

</h4>
                        </div>
                       
                     
                        
                        
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Comments</h3>
                {/* Ensure video.comments is an array before accessing it */}
                {Array.isArray(video.comments) && video.comments.length > 0 ? (
                    video.comments.map((comment) => (
                        <div key={comment.commentId} className="comment">
                            <p><strong>{comment.userId}</strong> <span>{comment.timestamp}</span></p>
                            <p>{comment.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
            
        </>
    );
};

export default VideoPlayer;
