const express = require("express");
const userRouter = express.Router();

userRouter.post("/user", (req, res) => {
    let user = req.body;
    console.log("User",user);
    res.status(201).send(`user details in console`);
})



module.exports = userRouter;
