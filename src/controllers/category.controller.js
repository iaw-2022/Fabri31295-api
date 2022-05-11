const database = require('../database');

const getCategories = async(req, res) => {
    const response = await database.query('SELECT * FROM categories');
    res.status(200).json(response.rows);
};

const getCategoryByName = async (req, res) => {
    const name = req.params.name;
    const response = await database.query('SELECT * FROM categories WHERE name = $1', [name]);
    res.json(response.rows);
};

module.exports = {
    getCategories,
    getCategoryByName
};