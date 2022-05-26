const database = require('../database');

const getCategories = async(req, res) => {
    const response = await database.query('SELECT * FROM categories');

    if(response.rows.length > 0) {
        res.status(200).json(response.rows);
    } else {
        res.status(404).json({error: 'Not found'});
    }
};

const getCategoryByName = async (req, res) => {
    const name = req.params.name;

    if(typeof name === 'string') {
        const response = await database.query('SELECT * FROM categories WHERE name = $1', [name]);

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
    getCategories,
    getCategoryByName
};