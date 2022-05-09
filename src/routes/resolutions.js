const { Router } = require('express');
const router = Router();

const { getResolutions, getResolutionByName, getResolutionByAspectRatio } = require('../controllers/resolution.controller');

router.get('/resolutions', getResolutions);
router.get('/resolutions/:name', getResolutionByName);
router.get('/resolutions/:aspect_ratio', getResolutionByAspectRatio);

module.exports = router;