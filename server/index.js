require('dotenv').config()
const express = require('express');
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const productCTRL = require('./controller');

const app = express();
app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Server this is Database, how copy?')
})

app.listen(SERVER_PORT, ()=> console.log(`Server enganged on ${SERVER_PORT}. over and out.`))

