const { Router } = require('express');
const router = Router();

const { getImages, getImageByName, getImageByDate, getImageByPrice, getImageByCategory, getImageByResolution } = require('../controllers/image.controller');

router.get('/images', getImages);
router.get('/images/:name', getImageByName);
router.get('/images/:date', getImageByDate);
router.get('/images/:price', getImageByPrice);
router.get('/images/:category', getImageByCategory);
router.get('/images/:resolution', getImageByResolution);

module.exports = router;