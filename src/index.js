const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});