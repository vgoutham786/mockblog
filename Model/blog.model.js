const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({

    userId: String,
    username: String,
    title: String,
    content: String,
    category: String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: []

})
const blogModel = mongoose.model("blog", blogSchema)

module.exports = blogModel