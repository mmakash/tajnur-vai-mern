const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
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

const TaskModel = mongoose.model("task", taskSchema);
module.exports = TaskModel;