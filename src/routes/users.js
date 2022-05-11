const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, getUserByEmail, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users:
 *   get:
 *     description: Use to request all users.
 *     tags: 
 *       - Users
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Use to request a users.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of user
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/users/:id', getUserById);

/**
 * @swagger
 * /users/email/{email}:
 *   get:
 *     description: Use to request a users.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email of user
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/users/email/:email', getUserByEmail);

/**
 * @swagger
 * /users/create:
 *   post:
 *     description: Use to create a user.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create
 *         schema:
 *           type: object
 *           required:
 *              - username
 *           properties:
 *              username:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.post('/users/create', createUser);

/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     description: Use to update a user.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of user
 *       - in: body
 *         name: user
 *         description: The user to  update
 *         schema:
 *           type: object
 *           required:
 *              - username
 *           properties:
 *              username:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.put('/users/update/:id', updateUser)

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     description: Use to delete a user.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of user
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.delete('/users/delete/:id', deleteUser);

module.exports = router;