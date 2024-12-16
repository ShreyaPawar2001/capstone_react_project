import React from "react";
import Header from "../components/Header"; // Adjust the path as necessary
import { useAuth } from "../AuthContext";

const VideoPage = () => {
  const { isAuthenticated, user, logout } = useAuth(); // If you need auth status for the page

  const handleSearch = (searchQuery) => {
    console.log("Searching for: ", searchQuery);
    // You can implement search logic here
  };

  const handleSidebarToggle = () => {
    // Your sidebar toggle logic here\
    const toggleSidebar = () => {
      setSidebarOpen((prevState) => !prevState);
    };
  };

  return (
    <div>
      {/* Render Header on Video Page */}
      <Header onSearch={handleSearch} onSidebarToggle={handleSidebarToggle} />
      
      {/* Content of the video page */}
      <div className="video-page-content">
        {/* Add your video content here */}
        <h1>Video Page</h1>
        <p>Welcome to the video page!</p>
      </div>
      
    </div>
  );
};

export default VideoPage;
