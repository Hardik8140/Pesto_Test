const mongoose = require("mongoose");

const taskModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("task", taskModel);

module.exports = { TaskModel };
