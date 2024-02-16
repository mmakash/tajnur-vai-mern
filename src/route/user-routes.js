const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user-Controller");
const apiEndpoints = require("../utility/all-api");

const userEndpoints = apiEndpoints.user;

userRouter.post(userEndpoints.user, userController.CrateUser);
userRouter.put(userEndpoints.user, userController.UpdateUser);
userRouter.delete(userEndpoints.user, userController.DeleteUser);
userRouter.get(userEndpoints.user, userController.SingleUser);
userRouter.get(userEndpoints.allUser, userController.AllUsers);



module.exports = userRouter;