const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  thumbnailUrl: { type: String },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel', required: true },  // Reference to Channel
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
