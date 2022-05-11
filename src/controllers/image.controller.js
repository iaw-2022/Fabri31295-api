const database = require('../database');

const getImages = async(req, res) => {
    const response = await database.query('SELECT * FROM images');
    res.status(200).json(response.rows);
};

const getImageByName = async (req, res) => {
    const name = req.params.name;
    const response = await database.query('SELECT * FROM images WHERE name = $1', [name]);
    res.json(response.rows);
};

const getImageByDate = async (req, res) => {
    const date = req.params.date;
    const response = await database.query('SELECT * FROM images WHERE date = $1', [date]);
    res.json(response.rows);
};

const getImageByPrice = async (req, res) => {
    const price = parseInt(req.params.price);
    const response = await database.query('SELECT * FROM images WHERE price = $1', [price]);
    res.json(response.rows);
};

const getImageByCategory = async (req, res) => {
    const category = req.params.category;
    const response = await database.query('SELECT * FROM images WHERE category = $1', [category]);
    res.json(response.rows);
};

const getImageByResolution = async (req, res) => {
    const resolution = req.params.resolution;
    const response = await database.query('SELECT * FROM images WHERE resolution = $1', [resolution]);
    res.json(response.rows);
};

module.exports = {
    getImages,
    getImageByName, 
    getImageByDate, 
    getImageByPrice,
    getImageByCategory, 
    getImageByResolution, 
};