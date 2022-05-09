const database = require('../database');

const getResolutions = async(req, res) => {
    const response = await database.query('SELECT * FROM resolutions');
    res.status(200).json(response.rows);
};

const getResolutionByName = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM resolutions WHERE name = $1', [id]);
    res.json(response.rows);
};

const getResolutionByAspectRatio = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM resolutions WHERE aspect_ratio = $1', [id]);
    res.json(response.rows);
};

module.exports = {
    getResolutions,
    getResolutionByName,
    getResolutionByAspectRatio
};