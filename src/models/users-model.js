const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;