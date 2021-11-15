require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
// require("./config/connection").connect();


const loginRoute = require("./modules/login/routes/loginRoute");
const userRoute = require("./modules/user/routes/userRoutes");
const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome");
});

app.use("/login", auth, loginRoute);
app.use("/register", userRoute)

module.exports = app;