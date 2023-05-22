import { createAction } from "@reduxjs/toolkit";

const addTask = createAction('addTask', (task) => {
  
  return {
    payload: task
  };
});

const deleteTask = createAction('deleteTask', (task) => {
    return {
      payload: task
    };
  });

const actions = { addTask, deleteTask };

export default actions;
