// backend/routes/movieRoutes.js

const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

// Create a new movie
router.post('/addmovie', async (req, res) => {
    try {
        const { title, director, releaseYear, genre, image, description, clickToWatch } = req.body;
        const newMovie = new Movie({ title, director, releaseYear, genre, image, description, clickToWatch });
        await newMovie.save();
        res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
    } catch (err) {
        console.error('Error creating movie:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all movies
router.get('/getallmovies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error('Error getting movies:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get a single movie by ID
router.get('/getsinglemovie/:_id', async (req, res) => {
    try {
        let movie = await Movie.findById(req.params._id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        console.error('Error getting movie:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a movie by ID
router.put('/updateamovie/:_id', async (req, res) => {
    try {
        const { title, director, releaseYear, genre, image, description, clickToWatch } = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(req.params._id, { title, director, releaseYear, genre, image, description, clickToWatch }, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie updated successfully', movie: updatedMovie });
    } catch (err) {
        console.error('Error updating movie:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a movie by ID
router.delete('/deleteamovie/:_id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params._id);
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully', movie: deletedMovie });
    } catch (err) {
        console.error('Error deleting movie:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get movies by genre
router.get('/getmoviebygenre/:genre', async (req, res) => {
    try {
        const movies = await Movie.find({ genre: req.params.genre });
        res.json(movies);
    } catch (err) {
        console.error('Error getting movies by genre:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get movies by year
router.get('/getmoviebyyear/:releaseYear', async (req, res) => {
    try {
        const movies = await Movie.find({ releaseYear: req.params.releaseYear });
        res.json(movies);
    } catch (err) {
        console.error('Error getting movies by year:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Get movies by director
router.get('/getmoviebydirector/:director', async (req, res) => {
    try {
        const movies = await Movie.find({ director: req.params.director });
        res.json(movies);
    } catch (err) {
        console.error('Error getting movies by director:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Get unique directors
router.get('/directors', async (req, res) => {
    try {
      const directors = await Movie.distinct('director');
      res.json(directors);
    } catch (err) {
      console.error('Error fetching directors:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// Get unique genres
router.get('/genres', async (req, res) => {
    try {
      const genres = await Movie.distinct('genre');
      res.json(genres);
    } catch (err) {
      console.error('Error fetching genres:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
