const Task = require("../models/Task");

const index = async (req, res, next) => {
  try {
    const result = await Task.find();
    res.json({ result: result });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

const show = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Task.findById(id);
    res.json({ result: result });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

const add = async (req, res, next) => {
  try {
    let task = new Task({
      title: req.body.title,
      status: req.body.status,
    });
    const result = await task.save();
    res.json({ result: result, message: "Task ADDED" });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

const update = async (req, res, next) => {
  try {
    let taskId = req.body.taskId;
    let updatedData = {
      title: req.body.title,
      status: req.body.status,
    };
    const result = await Task.findByIdAndUpdate(taskId, { $set: updatedData });
    res.json({ result: result, message: "Task UPDATED" });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

module.exports = {
  index,
  show,
  add,
  update,
};
