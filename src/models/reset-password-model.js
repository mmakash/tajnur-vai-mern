const mongoose = require("mongoose");
const { Schema } = mongoose;

const resetPasswordSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }
});
const ResetPasswordModel = mongoose.model("reset-password", resetPasswordSchema);
module.exports = ResetPasswordModel;