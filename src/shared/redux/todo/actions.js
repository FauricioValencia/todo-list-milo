import { createActions } from "redux-actions";
export const {
  createTask,
  deleteTask,
  updateTask,
  saveDataFromFirebase
} = createActions({
  CREATE_TASK: task => task,
  DELETE_TASK: task => task,
  UPDATE_TASK: task => task,
  SAVE_DATA_FROM_FIREBASE: tasks => tasks
});
