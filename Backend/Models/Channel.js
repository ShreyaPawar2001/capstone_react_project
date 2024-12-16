const mongoose = require('mongoose');
const channelSchema = new mongoose.Schema({
    channelName: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: String,
    channelBanner: String,
    subscribers: Number,
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
  });
  module.exports = mongoose.model('Channel', channelSchema);
  