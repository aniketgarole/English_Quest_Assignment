const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.local_DB)

module.exports = {connection}