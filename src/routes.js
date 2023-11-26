const { Router } = require('express');
const router = Router();
const bodyParser = require("body-parser");

const image = require('./controllers/image.controller.js');
const category = require('./controllers/category.controller.js');
const resolution = require('./controllers/resolution.controller.js');
const token = require('./controllers/token.controller.js');
//const authenticate = require('./controllers/authenticate.controller.js');

router.use(bodyParser.json());

router.get('/', (request, response) => {
    response.json({
        message: 'Bienvenidos a mi API!'
    });
});

// Rutas de imagenes
router.get('/images', image.getImages);
router.get('/images/:name', image.getImageByName);
router.get('/images/id/:id', image.getImageByID);
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

// Rutas de autenticacion
//router.post('/autenticar', authenticate.autenticar);

router.post('/addToken', token.postToken);

module.exports = router;