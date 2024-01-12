import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTask } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.taskReducer.tasks);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteTask(id)).then(() => {
        dispatch(getTask());
      });
    },
    [dispatch]
  );

  const handleEditTask = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {Array.isArray(task) &&
        task.map((task) => (
          <div
            key={task._id}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "14px",
              borderRadius: "12px",
              margin: "8px",
            }}
          >
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button onClick={() => handleEditTask(task._id)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Task;
