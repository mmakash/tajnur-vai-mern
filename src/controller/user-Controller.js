const db = require("../../db");
const UserModel = require("../../src/models/users-model");
const CrateUser = async(req,res) =>{
    let userData = req.body;
    console.log("userData",userData);
try{
    // await db.collection("users").insertOne(userData);
    const resp = await UserModel.create(userData);
    res.send({
        status:200,
        message:"user created",
        data:resp
    })
}
catch(err){
    res.status(500).send("something went wrong");
}
}
const UpdateUser = async(req,res) =>{
    const userEmail = req.query.email;
    const updatedUserData = req.body;
    const filter = {email:userEmail};
    const update = updatedUserData;
    try{
        const resp = await UserModel.findOneAndUpdate(filter,update);
        res.send({
            status:200,
            message:"user updated",
            data:resp
        })
    }
    catch(err){
        res.status(500).send("something went wrong");
    }
}
const DeleteUser =  async(req,res) =>{
    let userEmail = req.query.email;
    const filter = {email:userEmail};
    try{
        const resp = await UserModel.findOneAndDelete(filter);
        res.send({
            status:200,
            message:"user deleted",
            data:resp
        });
        
    }
    catch(err){
        res.status(500).send("something went wrong");
    }
}
const SingleUser = async(req,res) =>{
    let userEmail = req.query.email;
    const filter = {email:userEmail};
    try{
        const resp = await UserModel.findOne(filter);
        res.send({
            status:200,
            message:"user found",
            data:resp
        })
    }
    catch(err){
        res.status(500).send("something went wrong");
    }
}
const AllUsers = async(req,res) =>{
   try{
    const resp = await UserModel.find();
    res.send({
        status:200,
        message:"users found",
        data:resp
    })
   }
   catch(err){
    res.status(500).send("something went wrong");
   }
}

module.exports = {
    CrateUser,
    UpdateUser,
    DeleteUser,
    SingleUser,
    AllUsers
}