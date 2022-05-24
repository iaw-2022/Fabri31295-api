require('dotenv').config({ path: "src/.env" })

module.exports = {
    llave: process.env.KEY,
    user: process.env.USER,
    password: process.env.PASSWORD
}