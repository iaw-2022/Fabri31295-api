const { Router } = require('express');
const router = Router();

const { autenticar } = require('../controllers/authenticate.controller');

router.post('/autenticar', autenticar);