import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { firebaseConfig } from "../../config/firebase/config";

const getOptions = {
  source: "server"
};

class Firebase {
  constructor() {
    let app;
    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
      app.firestore().enablePersistence();
    } else {
      app = firebase.app();
    }
    this.firestore = app.firestore();
    this.tasksCollection = this.firestore.collection("tasks");
  }

  doCreateTask = task => {
    try {
      return this.tasksCollection.doc(task.uid).set({
        ...task
      });
    } catch (error) {
      console.error("error en docreateTask: ", error);
    }
  };
  doUpdateTask = data => {
    return this.tasksCollection.doc(data.uid).set({ ...data }, { merge: true });
  };

  observerTasks = func => {
    return this.tasksCollection.onSnapshot(func);
  };
  doDeleteTask = uid => {
    return this.tasksCollection.doc(uid).delete();
  };
}

export default Firebase;
