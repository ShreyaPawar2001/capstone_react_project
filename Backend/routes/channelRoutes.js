// This file will handle the channel-related routes such as creating a channel, adding/removing videos from a channel, and getting channel details.
const express = require('express');
const router = express.Router();
const channelController = require('../controllers/ChannelController');
const authenticateJWT = require('../middleware/authenticateJWT');  // Import the JWT middleware


// Create a new channel
router.post('/create', authenticateJWT,channelController.createChannel);

// Get channel by ID
router.get('/:channelId', authenticateJWT,channelController.getChannelById);

// Add a video to a channel
router.put('/:channelId/video/:videoId',authenticateJWT, channelController.addVideoToChannel);

// Remove a video from a channel
router.delete('/:channelId/video/:videoId',authenticateJWT, channelController.deleteVideoFromChannel);

module.exports = router;
