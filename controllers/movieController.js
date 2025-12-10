let movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "The Matrix", genre: "Action", year: 1999 }
];

let nextId = 3;

exports.getMovies = (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filtered = movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
        return res.json(filtered);
    }
    res.json(movies);
};

exports.addMovie = (req, res) => {
    const newMovie = {
        id: nextId++,
        ...req.body
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
};

exports.deleteMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Фильм не найден' });
    }
};