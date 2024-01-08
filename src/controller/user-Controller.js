const CrateUser = (req,res) =>{
    let userData = req.body;
    console.log("User",userData);
    res.status(201).send("user created");
}
const UpdateUser = (req,res) =>{
    const userEmail = req.query.email;
    const updatedUserData = req.body;
    console.log("updatedUser",updatedUserData);
    console.log("userEmail",userEmail);
    res.send(`updated user`);
}
const DeleteUser = (req,res) =>{
    let userEmail = req.query;
    console.log("userEmail",userEmail);
    res.send(`deleted user`);
}
const SingleUser = (req,res) =>{
    let userEmail = req.query.email;
    console.log("userEmail",userEmail);
    res.send(`single user`);
}
const AllUsers = (req,res) =>{
    res.send(`delete user`);
}

module.exports = {
    CrateUser,
    UpdateUser,
    DeleteUser,
    SingleUser,
    AllUsers
}