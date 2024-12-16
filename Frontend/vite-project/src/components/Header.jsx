import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import './Header.css';

const Header = ({ onSearch, onSidebarToggle }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [showCreateChannelForm, setShowCreateChannelForm] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [channelImage, setChannelImage] = useState('');
  const [isChannelCreated, setIsChannelCreated] = useState(false); // Track channel creation status
  const navigate = useNavigate(); // To navigate to the new channel page

  const handleCreateChannel = (e) => {
    e.preventDefault();
    // Handle channel creation logic here
    console.log('Channel Created:', { channelName, channelDescription, channelImage });

    // Reset form after submission
    setChannelName('');
    setChannelDescription('');
    setChannelImage('');
    setShowCreateChannelForm(false);
    setIsChannelCreated(true); // Update state to indicate channel is created

    // Redirect to the user's channel page after creation
    navigate(`/channel/${user.username}`);
  };

  return (
    <header>
      {/* YouTube Logo */}
      <div className="logo">
        <button className="hamburger" onClick={onSidebarToggle}>
          ☰
        </button>
        <Link to="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>

     {/* Search Bar */}
<div className="search-bar">
  <input 
    type="text" 
    placeholder="Search by title" 
    onChange={(e) => onSearch(e.target.value)} 
  />
  <button>🔍</button>
  
</div>



      {/* Authentication */}
      <div className="auth-buttons">
        {isAuthenticated ? (
          <div className="auth-info">
            <span className="signin_name">{user.username}</span> {/* Display username */}
            <button onClick={logout}>Logout</button>

            {/* Create Channel Button */}
            <button onClick={() => setShowCreateChannelForm(!showCreateChannelForm)}>Create Channel</button>
          </div>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>

      {/* Create Channel Form */}
      {showCreateChannelForm && (
        <div className="create-channel-form">
          <h3>Create Your YouTube Channel</h3>
          <form onSubmit={handleCreateChannel}>
            <div>
              <label>Channel Name</label>
              <input 
                type="text" 
                value={channelName} 
                onChange={(e) => setChannelName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Channel Description</label>
              <textarea 
                value={channelDescription} 
                onChange={(e) => setChannelDescription(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Profile Picture URL</label>
              <input 
                type="text" 
                value={channelImage} 
                onChange={(e) => setChannelImage(e.target.value)} 
                placeholder="Enter image URL" 
              />
            </div>
            <button type="submit">Create Channel</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
