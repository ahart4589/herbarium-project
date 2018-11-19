const express = require ('express')
    , bodyParser = require ('body-parser')

require ('dotenv').config()

const app = express()

const {SERVER_PORT} = process.env

app.use(bodyParser.json())


app.listen(SERVER_PORT, () => console.log('Server is running on port: ', SERVER_PORT))