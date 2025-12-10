const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const movieRoutes = require('./routes/movies');
app.use('/api/movies', movieRoutes);

module.exports = app;