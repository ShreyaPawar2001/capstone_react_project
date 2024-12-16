// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getVideos } from "./api"; // Import the API function

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch videos from the backend
//     const fetchVideos = async () => {
//       try {
//         const videoData = await getVideos();
//         console.log('videoooooooos')
//         setVideos(videoData); // Update state with the fetched videos
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch videos");
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleVideoClick = (video) => {
//     navigate(`/video/${video.id}`, { state: { video } });
//   };

//   if (loading) return <p>Loading videos...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="video-list">
//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="video-item"
//           onClick={() => handleVideoClick(video)}
//         >
//           <img src={video.thumbnailUrl} alt={video.title} />
//           <h3>{video.title}</h3>
//           <p>{video.uploader}</p>
//           <p>{video.views} views</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;
