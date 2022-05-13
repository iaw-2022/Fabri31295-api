const database = require('../database');

const getUsers = async(req, res) => {
    const response = await database.query('SELECT * FROM users');

    if(response.rows.length > 0) {
        res.status(200).json(response.rows);
    } else {
        res.status(404).json({error: 'Not found'});
    }
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    if(!isNaN(id)){
        const response = await database.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(response.rows);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'Not found'});
        }

    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const getUserByEmail = async (req, res) => {
    const email = req.params.email;

    if(emailIsValid(email)) {
        const response = await database.query('SELECT * FROM users WHERE email = $1', [email]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if(emailIsValid(email) && typeof(name) == 'string' && typeof(password) == 'string') {
        const response = await database.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
        
        if(response.rows.length > 0){
            res.json({
                message: 'User Added successfully',
                body: {
                    user: {name, email, password}
                }
            })
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, password } = req.body;

    if(!isNaN(id) && emailIsValid(email) && typeof(name) == 'string' && typeof(password) == 'string') {
        
        const response =await database.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [
            name,
            email,
            password,
            id
        ]);

        if(response.rows.length > 0){
            res.json('User Updated Successfully');
            
        }else{
            res.status(404).json({error: 'Not found'});
        }
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    if(!isNaN(id)){
        await database.query('DELETE FROM users where id = $1', [
            id
        ]);
        res.json(`User ${id} deleted Successfully`);
    } else {
        res.status(400).json({error: 'Invalid parameter'});
    }
};

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
};

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};