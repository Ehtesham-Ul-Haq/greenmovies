const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'moviedekhega$420';

const { protect, admin } = require('../middleware/authMiddleware');

// Signup route No login required
router.post('/signup', async (req, res) => {
    try {
        const { name, username, password } = req.body;
        // Check if username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
        // Create new user
        const newUser = new User({ name, username, password });
        await newUser.save();

        const data = {
            user: {
                id: newUser.id
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.json({ success: true, authtoken });
    } catch (err) {
        console.error('Error signing up:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Login route No login required but sign up required
router.post('/login', passport.authenticate('local'), async (req, res) => {
    try {
        const data = {
            user: {
                id: req.user.id
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.json({ success: true, authtoken });
    } catch (err) {
        console.error('Error logging in:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



// Protect middleware ensures the user is authenticated
// Admin middleware ensures the user is an admin

// Route to set a user as admin
router.put('/admin/:id', protect, admin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.isAdmin = true;
        await user.save();

        res.json({ message: 'User updated to admin' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to get all users (only accessible by admins)
router.get('/getalluser', protect, admin, async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to remove admin privileges
router.put('/removeadmin/:id', protect, admin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.isAdmin = false;
        await user.save();

        res.json({ message: 'Admin privileges removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Add this to your authRoutes.js

router.get('/checkadmin', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ isAdmin: user.isAdmin });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


module.exports = router;
