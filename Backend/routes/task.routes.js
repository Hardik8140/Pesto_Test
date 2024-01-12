const express = require("express");
const { TaskModel } = require("../model/task.model");

const taskRoutes = express.Router();

taskRoutes.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const task = new TaskModel(payload);
    await task.save();
    res.status(200).json({ msg: "Task Added Successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

taskRoutes.get("/", async (req, res) => {
  try {
    const task = await TaskModel.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

taskRoutes.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const updatePayload = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, updatePayload, {
      new: true,
    });
    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ msg: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

taskRoutes.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteTask = await TaskModel.findByIdAndDelete(id);
    if (deleteTask) {
      res.status(200).json(deleteTask);
    } else {
      res.status(404).json({ msg: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = { taskRoutes };
