const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controller/task-Controller");
const apiEndpoints = require("../utility/all-api");

const taskEndpoints = apiEndpoints.task;

taskRouter.post(taskEndpoints.task, taskController.CrateTask);
taskRouter.put(taskEndpoints.task, taskController.UpdateTask);
taskRouter.delete(taskEndpoints.task, taskController.DeleteTask);
taskRouter.get(taskEndpoints.task, taskController.SingleTask);
taskRouter.get(taskEndpoints.allTask, taskController.AllTasks);

module.exports = taskRouter;