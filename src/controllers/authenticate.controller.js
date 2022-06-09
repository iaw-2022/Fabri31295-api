const jwt = require('jsonwebtoken'),
      config = require('../configs/config'),
      express = require('express');

const autenticar = async (req, res) => {
    if(req.body.usuario === config.user && req.body.contrasena === config.password) {
      
      const payload = {
        check:  true
      };
  
      const token = jwt.sign(payload, config.llave, {
        expiresIn: 1440
      });
  
      res.json({
        mensaje: 'Autenticación correcta',
        token: token
      });
  
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
};

const protectedRoutes = express.Router(); 

protectedRoutes.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, config.llave, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

module.exports = {
    autenticar,
    protectedRoutes
};