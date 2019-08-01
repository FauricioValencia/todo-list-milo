import { call, put, takeLatest } from "@redux-saga/core/effects";
import todoActionType from "./actions.types";
import TasksService from "../../services/tasks/tasks";
import {
  createTask,
  getAllTask,
  deleteTask,
  deleteAllTask,
  doneTask,
  updateTask
} from "./actions";

function* createTaskSaga(action) {
  try {
    const taskResponse = yield call(TasksService.observerTasks);
  } catch (error) {
    console.error("error to try create task");
  }
}

const tasksSagas = [takeLatest(todoActionType.CREATE_TASK, createTaskSaga)];

export default tasksSagas;
