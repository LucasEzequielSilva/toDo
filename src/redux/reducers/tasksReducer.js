import { createReducer } from "@reduxjs/toolkit";
import taskAction from '../actions/tasksAction';

const { addTask, deleteTask } = taskAction;

const initialState = {
  tasks: []
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(addTask, (state, action) => {
    return {
      ...state,
      tasks: [...state.tasks, action.payload]
    };
  })
  .addCase(deleteTask, (state, action) => {
    let tasks2 = state.tasks.filter(t=> t != action.payload)
    return {
      ...state,
      tasks: tasks2
    };
  })
);

export default reducer;