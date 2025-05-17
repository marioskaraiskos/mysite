require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User'); // Make sure to import your user model

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// POST route to handle login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', username, password);

  // Find user in MongoDB
  const user = await User.findOne({ username });
  console.log('User found:', user);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

 if (password !== user.password) {
  return res.status(400).json({ message: 'Invalid credentials' });
}

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  // Send a success message along with the token
  res.json({ message: 'Login successful', token });
});

// POST route to handle registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Delete all users (for testing purposes)
/* User.deleteMany({})
  .then(() => console.log('All users deleted'))
  .catch(err => console.log('Error deleting users:', err));
*/

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
