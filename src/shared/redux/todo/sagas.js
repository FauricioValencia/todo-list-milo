import { take, call, put, takeLatest } from "@redux-saga/core/effects";
import { eventChannel, END } from "redux-saga";
import todoActionType from "./actions.types";
import TasksService from "../../../services/tasks/tasks";
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
    yield call(TasksService.doCreateTask, action.task);
  } catch (error) {
    console.error("error to try create task", error);
  }
}

function* observerTaskSaga(action) {
  try {
    const snapshot = yield call(TasksService.observerTasks);
    console.log("------------------------------------");
    console.log(snapshot);
    console.log("------------------------------------");
    // return tasksResponse;
    // while (true) {
    //   let paco = yield take(tasksResponse);
    //   console.log("paco: ", paco);
    // }
  } catch (error) {
    console.error("error observer saga: ", error);
  }
}

function* updateTaskSaga(action) {
  try {
    yield call(TasksService.doUpdateTask, action.task);
  } catch (error) {
    console.error("error to try create task", error);
  }
}

function* deleteTaskSaga(action) {
  try {
     yield call(TasksService.doDeleteTask, action.task);
  } catch (error) {
    console.error("cant delete task: ", error);
  }
}

const tasksSagas = [
  takeLatest(todoActionType.CREATE_TASK, createTaskSaga),
  takeLatest(todoActionType.OBSERVER_TASKS, observerTaskSaga),
  takeLatest(todoActionType.UPDATE_TASK, updateTaskSaga),
  takeLatest(todoActionType.DELETE_TASK, deleteTaskSaga)
];

export default tasksSagas;
