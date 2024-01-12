import {
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
} from "./actionType";
import axios from "axios";

export const getTask = () => async (dispatch) => {
  dispatch({ type: FETCH_TASK_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/task`);
    // console.log(res.data);
    dispatch({ type: FETCH_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_TASK_FAILURE });
  }
};

export const postTask = (taskData) => async (dispatch) => {
  dispatch({ type: FETCH_TASK_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/task/add`, taskData);
    // console.log(res.data);
    dispatch({ type: FETCH_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_TASK_FAILURE });
  }
};

export const patchTask = (id, updatedData) => async (dispatch) => {
  dispatch({ type: FETCH_TASK_REQUEST });
  try {
    let res = await axios.patch(
      `http://localhost:8080/task/update/${id}`,
      updatedData
    );
    console.log(res.data);
    dispatch({ type: FETCH_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_TASK_FAILURE });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: FETCH_TASK_REQUEST });
  try {
    let res = await axios.delete(`http://localhost:8080/task/delete/${id}`);
    console.log(res.data);
    dispatch({ type: FETCH_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_TASK_FAILURE });
  }
};
