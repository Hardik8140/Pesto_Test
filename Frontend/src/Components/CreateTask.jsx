import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { postTask } from "../Redux/action";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "All",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    const taskData = {
      title: task.title,
      description: task.description,
      status: task.status,
    };
    dispatch(postTask(taskData));
    setTask({
      title: "",
      description: "",
      status: "All",
    });
  }, [dispatch, task.title, task.description, task.status]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="All">Select the Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default CreateTask;
