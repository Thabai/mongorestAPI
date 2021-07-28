const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    }, 
    year: {
        type: Number,
    },
    description: {
        type: String,
        required: true,
        default: 'awaiting info'
    },
    actor:{
        type: String,
        required: true,
        default: 'awaiting info'
    },
    category: {
        type: String,
        required: true,
        default: 'awaiting info'
    },
    watched: {
        type: Boolean,
        required: true,
        default: false,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;