import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchTask } from "../Redux/action";

const EditTask = () => {
  const { id } = useParams();
  const tasks = useSelector((store) => store.taskReducer.tasks);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    status: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(tasks) && tasks.length > 0) {
      const selectedTask = tasks.find((t) => t._id === id);
      setUpdatedTask(
        selectedTask || { title: "", description: "", status: "" }
      );
    }
  }, [tasks, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(patchTask(id, updatedTask)).then(() => {
      navigate("/");
    });
  };

  if (!tasks) {
    return <div>Loading...</div>;
  }

  const { title, description, status } = updatedTask;

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <label>Status:</label>
        <select name="status" value={status} onChange={handleInputChange}>
          <option value="All">Select the Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <br />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default EditTask;
