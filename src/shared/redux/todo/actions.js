import todoActionType from "./actions.types";

export const createTask = (task = {}) => ({
  type: todoActionType.CREATE_TASK,
  task
});

export const observerTasks = (tasks = []) => ({
  type: todoActionType.OBSERVER_TASKS,
  tasks
});

export const deleteTask = (task = {}) => ({
  type: todoActionType.DELETE_TASK,
  task
});

export const doneTask = (task = {}) => ({
  type: todoActionType.DONE_TASK,
  task
});

export const updateTask = (task = {}) => ({
  type: todoActionType.UPDATE_TASK,
  task
});

export const saveDataFromFirebase = (tasks = []) => {
  return {
    type: todoActionType.SAVE_DATA_FROM_REDUX,
    tasks
  };
};
