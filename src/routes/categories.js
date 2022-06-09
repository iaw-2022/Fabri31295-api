const { Router } = require('express');
const router = Router();

const { getCategories, getCategoryByName } = require('../controllers/category.controller');

/**
 * @swagger
 * /categories:
 *   get:
 *     description: Use to request all categories.
 *     tags: 
 *       - Categories
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/categories', getCategories);

/**
 * @swagger
 * /categories/{name}:
 *   get:
 *     description: Use to request a category.
 *     tags: 
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of category
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/categories/:name', getCategoryByName);

module.exports = router;