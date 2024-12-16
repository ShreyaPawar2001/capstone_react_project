// require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); // Custom MongoDB connection
const authRoutes = require('./routes/authRoutes');
const channelRoutes = require('./routes/channelRoutes');
const videoRoutes = require('./routes/VideoRoutes');

require('dotenv').config();
// const PORT=process.env.MONGO_URI;

// Access JWT Secret
const jwtSecret = process.env.JWT_SECRET;

// Debug: Ensure the secret key is loaded correctly
console.log("JWT Secret:", jwtSecret);
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/channels', channelRoutes); 
app.use('/api/videos', videoRoutes); 
    

app.use(express.urlencoded({ extended: true }));

// Example Route (Optional)
app.get('/', (req, res) => {
  res.send('Server is running on port');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose();
// app.use("/base",routes); 
