import todoActionType from "./actions.types";

const initialState = {
  tasks: []
};

function createTask(state, tasks) {
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
  return {
    ...state,
    tasks: task
  };
}

function doneTask(state, task) {
  return {
    ...state,
    tasks: task
  };
}

function updateTask(state, task) {
  return {
    ...state,
    tasks: task
  };
}

function saveDataFromRedux(state, tasks) {
  return {
    ...state,
    tasks
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
    case todoActionType.SAVE_DATA_FROM_REDUX:
      return saveDataFromRedux(state, action.tasks);
    default:
      return state;
  }
}
