// This file will handle the video-related routes such as creating, updating, and deleting videos.
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/VideoController');

// Create a new video
router.post('/create', videoController.createVideo);

// Get all videos
router.get('/', videoController.getAllVideos);

// Get video by ID
router.get('/:videoId', videoController.getVideoById);

// Update video by ID
router.put('/:videoId', videoController.updateVideo);

// Delete video by ID
router.delete('/:videoId', videoController.deleteVideo);

module.exports = router;
