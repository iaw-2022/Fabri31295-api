const database = require('../database');

const getImages = async(req, res) => {
    const response = await database.query('SELECT * FROM images');
    res.status(200).json(response.rows);
};

const getImageByName = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM images WHERE name = $1', [id]);
    res.json(response.rows);
};

const getImageByDate = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM images WHERE date = $1', [id]);
    res.json(response.rows);
};

const getImageByPrice = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM images WHERE price = $1', [id]);
    res.json(response.rows);
};

const getImageByCategory = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM images WHERE category = $1', [id]);
    res.json(response.rows);
};

const getImageByResolution = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM images WHERE resolution = $1', [id]);
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