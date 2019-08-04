import { call, takeLatest } from "@redux-saga/core/effects";
import todoActionType from "./actions.types";
import TasksService from "../../../services/tasks/tasks";

function* createTaskSaga(action) {
  try {
    yield call(TasksService.doCreateTask, action.payload);
  } catch (error) {
    console.error("error to try create task", error);
  }
}

function* updateTaskSaga(action) {
  try {
    yield call(TasksService.doUpdateTask, action.payload);
  } catch (error) {
    console.error("error to try create task", error);
  }
}

function* deleteTaskSaga(action) {
  try {
    yield call(TasksService.doDeleteTask, action.payload);
  } catch (error) {
    console.error("cant delete task: ", error);
  }
}

const tasksSagas = [
  takeLatest(todoActionType.CREATE_TASK, createTaskSaga),
  takeLatest(todoActionType.UPDATE_TASK, updateTaskSaga),
  takeLatest(todoActionType.DELETE_TASK, deleteTaskSaga)
];

export default tasksSagas;
