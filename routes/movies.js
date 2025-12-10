const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movieController');
const validateMovie = require('../middleware/validateMovie');

router.get('/', getMovies);
router.post('/', validateMovie, addMovie);
router.delete('/:id', deleteMovie);

module.exports = router;