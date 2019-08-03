import todoActionType from "./actions.types";

const initialState = {
  tasks: []
};

function createTask(state, task) {
  const tasks = [...state.tasks];
  tasks.push(task);
  return {
    ...state,
    tasks
  };
}

function observerTasks(state, tasks) {
  return {
    ...state,
    tasks
  };
}

function deleteAllTasks(state, tasks) {
  return {
    ...state,
    tasks: []
  };
}

function deleteTask(state, task) {
  const newTasks = [...state.tasks];
  const indexTask = newTasks.findIndex(element => element.id === task.id);
  newTasks.splice(indexTask, 1);
  return {
    ...state,
    tasks: newTasks
  };
}

function doneTask(state, task) {
  const newTasks = [...state.tasks];
  const indexTask = newTasks.findIndex(element => element.id === task.id);
  newTasks[indexTask] = { ...newTasks[indexTask], done: true };
  return {
    tasks: newTasks
  };
}

function updateTask(state, task) {
  const newTasks = [...state.tasks];
  const indexTask = newTasks.findIndex(element => element.id === task.id);
  newTasks[indexTask] = { ...newTasks[indexTask], ...task };
  return {
    tasks: newTasks
  };
}

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case todoActionType.CREATE_TASK:
      return createTask(state, action.task);
    case todoActionType.GET_ALL_TASKS:
      return observerTasks(state, action.tasks);
    case todoActionType.DELETE_ALL_TASKS:
      return deleteAllTasks(state, action.tasks);
    case todoActionType.DELETE_TASK:
      return deleteTask(state, action.task);
    case todoActionType.DONE_TASK:
      return doneTask(state, action.task);
    case todoActionType.UPDATE_TASK:
      return updateTask(state, action.task);
    default:
      return state;
  }
}
