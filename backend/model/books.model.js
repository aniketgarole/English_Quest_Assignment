const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
}, 
{
    versionKey: false
})



const bookModel = mongoose.model("post", bookSchema)


module.exports = {bookModel}