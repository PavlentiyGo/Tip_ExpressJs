const validateMovie = (req, res, next) => {
    const { title, year } = req.body;

    if (!title || typeof title !== 'string' || !year || typeof year !== 'number') {
        return res.status(400).json({ error: 'Название (строка) и год (число) обязательны.' });
    }

    next();
};

module.exports = validateMovie;