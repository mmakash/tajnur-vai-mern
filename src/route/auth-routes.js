const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth-Controller");
const apiEndpoints = require("../utility/all-api");

const authEndsPoints = apiEndpoints.auth;

authRouter.post(authEndsPoints.singin, authController.SignIn);
authRouter.post(authEndsPoints.singnout, authController.SignOut);
authRouter.post(authEndsPoints.forgetPassword, authController.forgetPassword);
authRouter.post(authEndsPoints.resetPassword, authController.resetPassword);

module.exports = authRouter;