import React from "react";
import { Routes, Route } from "react-router-dom";
import Task from "../Components/Task";
import CreateTask from "../Components/CreateTask";
import EditTask from "../Components/EditTask";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/addTask" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
