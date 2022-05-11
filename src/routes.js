const { Router } = require('express');
const router = Router();
const bodyParser = require("body-parser");

const user = require('./controllers/user.controller.js');
const image = require('./controllers/image.controller.js');
const category = require('./controllers/category.controller.js');
const resolution = require('./controllers/resolution.controller.js');

router.use(bodyParser.json());

router.get('/', (request, response) => {
    response.send("Bienvenidos a mi API!");
});

// Rutas de usuarios
router.get('/users', user.getUsers);
router.get('/users/:id', user.getUserById);
router.get('/users/email/:email', user.getUserByEmail);
router.post('/users/create', user.createUser);
router.put('/users/update/:id', user.updateUser);
router.delete('/users/delete/:id', user.deleteUser);

// Rutas de imagenes
router.get('/images', image.getImages);
router.get('/images/:name', image.getImageByName);
router.get('/images/date/:date', image.getImageByDate);
router.get('/images/price/:price', image.getImageByPrice);
router.get('/images/category/:category', image.getImageByCategory);
router.get('/images/resolution/:resolution', image.getImageByResolution);

// Rutas de categorias
router.get('/categories', category.getCategories);
router.get('/categories/:name', category.getCategoryByName);

// Rutas de resoluciones
router.get('/resolutions', resolution.getResolutions);
router.get('/resolutions/:name', resolution.getResolutionByName);
router.get('/resolutions/aspect_ratio/:aspect_ratio', resolution.getResolutionByAspectRatio);

module.exports = router;