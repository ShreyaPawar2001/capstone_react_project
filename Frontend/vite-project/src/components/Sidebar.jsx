import { Link } from "react-router-dom";
import './sidebar.css'; 

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
      ☰ {/* Close Button */}
      </button>

      <div className="sidebar-links">
        <li><Link to="/">🏠︎  Home</Link></li>
        <li>💬  Shorts</li>
        <li>▶  Subscriptions</li>
       <hr />
        
          

        <h3>Library</h3>
        <ul>
          <li><Link to="/history">↺ History</Link></li> 
          <li><Link to="/playlists">⏭ Playlists</Link></li>
          <li><Link to="/your-videos">➤ Live</Link></li>
          <li><Link to="/your-courses">🎲 Gaming</Link></li>
          <li><Link to="/watch-later">🏆 Sports</Link></li>
          <li><Link to="/liked-videos">📑Courses</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
