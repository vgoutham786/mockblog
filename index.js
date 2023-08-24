const express = require("express");
const connetToDb = require("./db");
const userRoute = require("./Routes/user.route");
const blogRoute = require("./Routes/blog.route");
const auth = require("./Middleware/auth.middleware");
const cors = require("cors");
const app = express();
app.use(cors())
require("dotenv").config()
app.use(express.json());
const port = +process.env.PORT || 8000
app.use("/", userRoute)
app.use(auth)
app.use("/blogs", blogRoute)


app.listen(port, async () => {
    try {
        await connetToDb
        console.log("connected to db")
        console.log("server running at port", port)
    } catch (error) {
        console.log(error)
    }
})