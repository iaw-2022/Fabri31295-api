const { Router } = require('express');
const router = Router();

const { getImages, getImageByName, getImageByDate, getImageByPrice, getImageByCategory, getImageByResolution } = require('../controllers/image.controller');

/**
 * @swagger
 * /images:
 *   get:
 *     description: Use to request all images.
 *     tags: 
 *       - Images
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/images', getImages);

/**
 * @swagger
 * /images/{name}:
 *   get:
 *     description: Use to request a image.
 *     tags: 
 *       - Images
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of image
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/images/:name', getImageByName);

/**
 * @swagger
 * /images/date/{date}:
 *   get:
 *     description: Use to request a image.
 *     tags: 
 *       - Images
 *     parameters:
 *       - in: path
 *         name: date
 *         schema:
 *           type: string
 *           example: "2022-02-01"
 *         required: true
 *         description: creation date of image
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/images/date/:date', getImageByDate);

/**
 * @swagger
 * /images/price/{price}:
 *   get:
 *     description: Use to request a image.
 *     tags: 
 *       - Images
 *     parameters:
 *       - in: path
 *         name: price
 *         schema:
 *           type: integer
 *         required: true
 *         description: price of image
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/images/price/:price', getImageByPrice);

/**
 * @swagger
 * /images/category/{category}:
 *   get:
 *     description: Use to request a image.
 *     tags: 
 *       - Images
 *     parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: caetgory of image
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/images/category/:category', getImageByCategory);

/**
 * @swagger
 * /images/resolution/{resolution}:
 *   get:
 *     description: Use to request a image.
 *     tags: 
 *       - Images
 *     parameters:
 *       - in: path
 *         name: resolution
 *         schema:
 *           type: string
 *         required: true
 *         description: resolution of image
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/images/resolution/:resolution', getImageByResolution);

module.exports = router;