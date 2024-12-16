import React from 'react';
import { useParams } from 'react-router-dom';
import './ChannelPage.css'; 
import Header from './Header';

const ChannelPage = () => {
  const { username } = useParams(); // Access the username from the URL

  // Dummy video data
  const dummyVideos = [
    { id: 1, title: "Hanuman Chalisa", thumbnailUrl: "https://cdn.pixabay.com/photo/2023/05/17/10/20/hanuman-7999727_1280.png" },
    { id: 2, title: "tum hi ho music", thumbnailUrl: "https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_1280.jpg" },
    { id: 3, title: "Podcast-The Ranveer show", thumbnailUrl: "https://cdn.pixabay.com/photo/2014/10/11/21/18/sunset-485016_1280.png" },
  ];

  return (
    <>
    <Header />
    <div className="channel-page">
      <h1>{username}'s Channel</h1>
      <div className="channel-info">
        <h2>Welcome to {username}'s YouTube Channel!</h2>
        {/* Dummy channel image */}
        <img 
          src="https://cdn.pixabay.com/photo/2023/05/22/13/45/mount-fuji-8010752_1280.jpg" 
          alt="Channel Thumbnail" 
          className="channel-img"
        />
      </div>
      
      <div className="video-list">
        <h3>Uploaded Videos</h3>
        <div className="videos">
          {dummyVideos.map(video => (
            <div key={video.id} className="video-item">
              <img src={video.thumbnailUrl} alt={video.title} />
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};


export default ChannelPage;
