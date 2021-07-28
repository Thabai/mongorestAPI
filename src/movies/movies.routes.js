const { Router } = require('express');
const { createMovie, findMovie, updateMovieDesc, deleteMovie} = require('./movies.controllers');
const movieRouter = Router();

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies/:title', findMovie);
movieRouter.put('/movies', updateMovieDesc);
movieRouter.delete('/movies/:title', deleteMovie);

module.exports = movieRouter;