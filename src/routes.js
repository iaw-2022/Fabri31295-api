
const { Router } = require('express');
const router = Router();
const bodyParser = require("body-parser");

const user = require('./controllers/user.controller.js');

router.use(bodyParser.json());

router.get('/', (request, response) => {
    response.send("Bienvenidos a mi API!");
});

// Rutas de usuarios
router.get('/users', user.getUsers);
router.get('/users/:id', user.getUserById);
router.post('/users', user.createUser);
router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;