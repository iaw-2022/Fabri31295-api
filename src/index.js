require('dotenv').config({ path: "src/.env" })
const swagger = require('../swagger');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    '/api-docs',
    swagger.serve, 
    swagger.setup
  );

// routes
app.use(require('./routes.js'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
