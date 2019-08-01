import Firebase from "../firebase/firebase";
class TasksService {
  constructor() {
    this.tasksProvider = new Firebase();
  }
  doCreateTask = task => {
    return this.tasksProvider.doCreateTask(task);
  };
  observerTasks = func => {
    return this.tasksProvider.observerTasks(func);
  };
  doUpdateTask = (uid, newData) => {
    return this.tasksProvider.doUpdateTask(uid, newData);
  };
  doDeleteTask = uid => {
    return this.tasksProvider.doDeleteTask(uid);
  };
}

export default TasksService;
