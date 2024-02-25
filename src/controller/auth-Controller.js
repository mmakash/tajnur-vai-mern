const UserModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const ResetPasswordModel = require("../models/reset-password-model");
const MailtrapClient = require("mailtrap").MailtrapClient;
const bcrypt = require('bcrypt');

const SignIn = async (req, res) => {
  const filter = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const resp = await UserModel.findOne(filter);
    const authToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          email: resp.email,
          role: resp.role,
        },
      },
      "My-TT-Secret-Key"
      );
      res.status(201).send({
        msg: "session created successfully",
        data: authToken,
      });
    } catch (err) {
      res.status(404).send("something went wrong"+err.toString());
    }
  };
  const SignOut = async (req, res) => {};
  const forgetPassword = async (req, res) => {
    try{
          const RECIPIENT_EMAIL = req.body.email;
          const otp = `${Math.floor(Math.random() * 1000)}`;
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "49040bab942dde",
    pass: "8d3a2b376cf2e8"
  }
});

const info = await transporter.sendMail({
  from: '"Fred Foo 👻" <noreply@task-tracker.com>', // sender address
  to: `${RECIPIENT_EMAIL}`, // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Task Tracker otp", // plain text body
  html: `<b>Token: ${otp}</b>`, // html body
});

  res.status(201).send({
    msg: "email sent successfully",
    data: info
  })
    }
    catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }

};

const forgetPasswordTokenValidity = async (req, res) => {
  const filter = {
    token: req.query.token,
  }
  try {
    await ResetPasswordModel.find(filter);
    res.send({
      msg: "token valid",
      data:null
    })
  }
  catch (err) {
    res.status(500).send("something went wrong");
  }
};
const resetPassword = async (req, res) => {
  const filter = {
    email: req.body.email,
  }
  const update = {
    password: req.body.password
  }
  try {
    const resp = await ResetPasswordModel.findOneAndUpdate(filter, update);
    res.send({
      msg: "password reset successfully",
      data: resp,
    })
  }
  catch (err) {
    res.status(500).send("something went wrong");
  }
};
module.exports = {
  SignIn,
  SignOut,
  forgetPassword,
  forgetPasswordTokenValidity,
  resetPassword,
};
