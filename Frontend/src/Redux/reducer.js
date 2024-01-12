import {
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
} from "./actionType";

const initialState = {
  tasks: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TASK_REQUEST:
    case FETCH_TASK_FAILURE:
      return { ...state };
    case FETCH_TASK_SUCCESS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
};
