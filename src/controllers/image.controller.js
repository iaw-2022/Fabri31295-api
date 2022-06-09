const database = require('../database');

const getImages = async(req, res) => {
    const response = await database.query('SELECT * FROM images');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'Not found'});
    }
};

const getImageByID = async (req, res) => {
    const id = req.params.id;
    
    if(!isNaN(id)) {
        const response = await database.query('SELECT * FROM images WHERE id = $1', [id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getImageByName = async (req, res) => {
    const name = req.params.name;
    
    if(typeof name === 'string') {
        const response = await database.query('SELECT * FROM images WHERE name = $1', [name]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getImageByDate = async (req, res) => {
    const date = req.params.date;
    
    if(typeof date === 'string') {
        const response = await database.query('SELECT * FROM images WHERE date = $1', [date]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getImageByPrice = async (req, res) => {
    const price = parseInt(req.params.price);

    if(!isNaN(req.params.price)) {
        const response = await database.query('SELECT * FROM images WHERE price = $1', [price]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getImageByCategory = async (req, res) => {
    const category = req.params.category;
    
    if(typeof category  === 'string') {
        const response = await database.query('SELECT * FROM images WHERE category = $1', [category]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getImageByResolution = async (req, res) => {
    const resolution = req.params.resolution;
    
    if(typeof resolution === 'string') {
        const response = await database.query('SELECT * FROM images WHERE resolution = $1', [resolution]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

module.exports = {
    getImages,
    getImageByID,
    getImageByName, 
    getImageByDate, 
    getImageByPrice,
    getImageByCategory, 
    getImageByResolution, 
};