const mongoose = require("mongoose");
const { Schema } = mongoose;

const sesssionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
    },
    createdBy: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
});

const SessionModel = mongoose.model("session", sesssionSchema);
module.exports = SessionModel;