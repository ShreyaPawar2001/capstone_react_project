import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; // Import the AuthContext
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import VideoPlayer from "./components/VideoPlayer";
// import Header from "./components/Header"; 
import ChannelPage from './components/ChannelPage';

function App() {
  return (
    <AuthProvider> {/* Wrap the app in AuthProvider */}
      <Router>
        <Routes>
        {/* <Header  /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={<VideoPlayer   />}/>
           <Route path="/channel/:username" element={<ChannelPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
