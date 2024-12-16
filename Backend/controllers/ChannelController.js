const Channel = require('../Models/Channel'); // Assuming you have a Channel model
const Video = require('../Models/Video'); // Assuming you have a Video model

// Create a new channel
exports.createChannel = async (req, res) => {
  const { channelName, description, channelBanner } = req.body;
  const { userId } = req.user; // Assuming user info is passed via JWT authentication
  
  try {
    const channel = new Channel({
      channelName,
      owner: userId,
      description,
      channelBanner,
      subscribers: 0, // Starting with no subscribers
    });

    await channel.save();
    res.status(201).json({ message: 'Channel created successfully', channel });
  } catch (error) {
    res.status(500).json({ message: 'Error creating channel', error });
  }
};

// Get a channel by ID
exports.getChannelById = async (req, res) => {
  const { channelId } = req.params;
  try {
    const channel = await Channel.findOne({ channelId }).populate('videos');
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    res.status(200).json(channel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching channel', error });
  }
};

// Add a video to a channel
exports.addVideoToChannel = async (req, res) => {
  const { channelId, videoId } = req.params;
  try {
    const channel = await Channel.findOne({ channelId });
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }

    const video = await Video.findOne({ videoId });
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    channel.videos.push(videoId);
    await channel.save();
    res.status(200).json({ message: 'Video added to channel', channel });
  } catch (error) {
    res.status(500).json({ message: 'Error adding video to channel', error });
  }
};

// Delete a video from a channel
exports.deleteVideoFromChannel = async (req, res) => {
  const { channelId, videoId } = req.params;
  try {
    const channel = await Channel.findOne({ channelId });
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }

    channel.videos = channel.videos.filter((video) => video.toString() !== videoId);
    await channel.save();
    res.status(200).json({ message: 'Video removed from channel', channel });
  } catch (error) {
    res.status(500).json({ message: 'Error removing video from channel', error });
  }
};
