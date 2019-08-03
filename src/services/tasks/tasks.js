import Firebase from "../firebase/firebase";
class TasksService {
  constructor() {
    this.tasksProvider = new Firebase();
  }
  doCreateTask = task => {
    try {
      console.log("el task que recibe desde task service", task);
      return this.tasksProvider.doCreateTask(task);
    } catch (error) {
      console.error("error al crear la tarea en service/task: ", error);
    }
  };
  observerTasks = func => {
    return this.tasksProvider.observerTasks(func);
  };
  doUpdateTask = task => {
    return this.tasksProvider.doUpdateTask(task);
  };
  doDeleteTask = task => {
    return this.tasksProvider.doDeleteTask(task.uid);
  };
}

export default new TasksService();
