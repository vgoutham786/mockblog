const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    email: String,
    image: String,
    password: String,
    userName: String
})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel