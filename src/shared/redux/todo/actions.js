import todoActionType from "./actions.types";

export const createTask = (task = {}) => ({
  type: todoActionType.CREATE_TASK,
  task
});

export const getAllTask = (tasks = []) => ({
  type: todoActionType.GET_ALL_TASKS,
  tasks
});

export const deleteAllTask = (tasks = []) => ({
  type: todoActionType.DELETE_ALL_TASKS,
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
