const database = require('../database');

const getResolutions = async(req, res) => {
    const response = await database.query('SELECT * FROM resolutions');

    if(response.rows.length > 0) {
        res.status(200).json(response.rows);
    } else {
        res.status(404).json({error: 'Not found'});
    }
};

const getResolutionByName = async (req, res) => {
    const name = req.params.name;

    if(typeof(name) == 'string') {
        const response = await database.query('SELECT * FROM resolutions WHERE name = $1', [name]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getResolutionByAspectRatio = async (req, res) => {
    const aspect_ratio = req.params.aspect_ratio;
    
    if(typeof(aspect_ratio) == 'string') {
        const response = await database.query('SELECT * FROM resolutions WHERE aspect_ratio = $1', [aspect_ratio]);

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
    getResolutions,
    getResolutionByName,
    getResolutionByAspectRatio
};