const database = require('../database');

const getResolutions = async(req, res) => {
    const response = await database.query('SELECT * FROM resolutions');
    res.status(200).json(response.rows);
};

const getResolutionByName = async (req, res) => {
    const name = req.params.name;
    const response = await database.query('SELECT * FROM resolutions WHERE name = $1', [name]);
    res.json(response.rows);
};

const getResolutionByAspectRatio = async (req, res) => {
    const aspect_ratio = req.params.aspect_ratio;
    const response = await database.query('SELECT * FROM resolutions WHERE aspect_ratio = $1', [aspect_ratio]);
    res.json(response.rows);
};

module.exports = {
    getResolutions,
    getResolutionByName,
    getResolutionByAspectRatio
};