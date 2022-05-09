require('dotenv').config({ path: "src/.env" })
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use(require('./routes.js'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
