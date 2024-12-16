const mongoose = require('mongoose');
const Video = require('../Models/Video'); // Assuming you have a Video model

// Create a new video
exports.createVideo = async (req, res) => {
  try {
    const { title, description, thumbnailUrl, channelId, uploader, views, likes, dislikes } = req.body;
    const channelObjectId = mongoose.Types.ObjectId(channelId);  // Convert channelId to ObjectId
    const uploaderObjectId = mongoose.Types.ObjectId(uploader); 
    const video = new Video({
      title,
      description,
      thumbnailUrl,
      channelId: channelObjectId,
      uploader: uploaderObjectId,
      views,
      likes,
      dislikes,
      uploadDate: new Date(),
    });

    await video.save();
    res.status(201).json({ message: 'Video created successfully', video });
  } catch (error) {
    res.status(500).json({ message: 'Error creating video', error });
  }
};

// Get all videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error });
  }
};

// Get a specific video by ID
exports.getVideoById = async (req, res) => {
  const { videoId } = req.params;
  try {
    const video = await Video.findOne({ videoId });
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching video', error });
  }
};

// Update a video
exports.updateVideo = async (req, res) => {
  const { videoId } = req.params;
  const { title, description, thumbnailUrl, views, likes, dislikes } = req.body;
  
  try {
    const updatedVideo = await Video.findOneAndUpdate(
      { videoId },
      { title, description, thumbnailUrl, views, likes, dislikes },
      { new: true }
    );
    
    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating video', error });
  }
};

// Delete a video
exports.deleteVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const deletedVideo = await Video.findOneAndDelete({ videoId });
    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting video', error });
  }
};
