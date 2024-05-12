// backend/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/userModel');

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
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error signing up:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login route No login required but sign up required

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ user: req.user });
});


module.exports = router;
