const express = require("express")
require("dotenv").config()
const cors = require('cors');
const {connection} = require("./connect")

const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.json())

console.log(connection)


const startServer = async () => {
    try {
        await connection
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}

startServer()