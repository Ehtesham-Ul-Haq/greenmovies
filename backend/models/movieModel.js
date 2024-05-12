// backend/models/movieModel.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: false
    },
    releaseYear: {
        type: Number,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    clickToWatch: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    // Add more properties as needed
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
