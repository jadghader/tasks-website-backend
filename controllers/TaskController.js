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
    const taskId = req.params.id;
    let updatedData = {
      title: req.body.title,
      status: req.body.status,
    };
    const result = await Task.findByIdAndUpdate(taskId, { $set: updatedData });
    res.json({ message: "Task UPDATED" });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

const del = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Task.findByIdAndDelete(id);
    res.json({ message: "Deleted succesfully" });
  } catch (error) {
    res.json({
      message: "Error while finding",
    });
  }
};

module.exports = {
  index,
  add,
  update,
  del,
};
