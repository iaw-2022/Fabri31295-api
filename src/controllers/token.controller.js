const database = require('../database');

const postToken = (req, res) => {
    const { token } = req.body;
  
    if (!token) {
      return res.status(400).json({ error: 'El token es obligatorio' });
    }
  
    const query = 'INSERT INTO fcm_tokens (token) VALUES ($1) RETURNING *';
    const values = [token];
  
    database.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al insertar el token:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
  
      console.log('Token insertado correctamente:', result.rows[0]);
      res.json({ success: true });
    });
};

module.exports = {
  postToken
};