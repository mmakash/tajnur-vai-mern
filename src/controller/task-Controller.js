const db = require("../../db");
const TaskModel = require("../../src/models/tasks-model");
const CrateTask = async (req, res) => {
  let taskData = {
    title: req.body?.title,
    description: req.body?.description,
    status: req.body?.status,
    priority: req.body?.priority,
    assignee: req.body?.assignee,
    createdBy: "akashmahmud@gmail.com",
    isDeleted: false,
  };
  console.log("taskData", taskData);
  try {
    const resp = await TaskModel.create(taskData);
    res.send({
      status: 200,
      message: "task created",
      data: resp,
    });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
const UpdateTask = async (req, res) => {
  const taskId = req.query.id;
  const updatedTaskData = req.body;
  const filter = { _id: taskId };
  const update = updatedTaskData;
  try {
    const resp = await TaskModel.findOneAndUpdate(filter, update);
    res.send({
      status: 200,
      message: "task updated",
      data: resp,
    });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
const DeleteTask = async (req, res) => {
  let taskId = req.query.id;
  const filter = { _id: taskId };
  const update = { isDeleted: true };
  try {
    const resp = await TaskModel.findOneAndUpdate(filter, update);
    res.send({
      status: 200,
      message: "task deleted",
      data: resp,
    });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
const SingleTask = async (req, res) => {
  let taskId = req.query.id;
  const filter = { _id: taskId };
  try {
    const resp = await TaskModel.findOne(filter);
    res.send({
      status: 200,
      message: "task found",
      data: resp,
    });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
const AllTasks = async (req, res) => {
  try {
    const resp = await UserModel.find();
    res.send({
      status: 200,
      message: "users found",
      data: resp,
    });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  CrateTask,
  UpdateTask,
  DeleteTask,
  SingleTask,
  AllTasks,
};
