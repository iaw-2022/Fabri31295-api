const { Router } = require('express');
const router = Router();

const { getResolutions, getResolutionByName, getResolutionByAspectRatio } = require('../controllers/resolution.controller');

/**
 * @swagger
 * /resolutions:
 *   get:
 *     description: Use to request all resolutions.
 *     tags: 
 *       - Resolutions
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/resolutions', getResolutions);

/**
 * @swagger
 * /resolutions/{name}:
 *   get:
 *     description: Use to request a resolution.
 *     tags: 
 *       - Resolutions
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of resolution
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/resolutions/:name', getResolutionByName);

/**
 * @swagger
 * /resolutions/aspect_ratio/{aspect_ratio}:
 *   get:
 *     description: Use to request a resolution.
 *     tags: 
 *       - Resolutions
 *     parameters:
 *       - in: path
 *         name: aspect_ratio
 *         schema:
 *           type: string
 *         required: true
 *         description: aspect ratio of resolution
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/resolutions/aspect_ratio/:aspect_ratio', getResolutionByAspectRatio);

module.exports = router;