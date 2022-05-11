const database = require('../database');

const getUsers = async(req, res) => {
    const response = await database.query('SELECT * FROM users');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await database.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const getUserByEmail = async (req, res) => {
    const email = req.params.email;
    const response = await database.query('SELECT * FROM users WHERE email = $1', [email]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const response = await database.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email, password}
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, password } = req.body;

    const response =await database.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [
        name,
        email,
        password,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await database.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};