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

    this.tasksCollection = this.firestore.collection("tasks");
  }

  doCreateTask = task => {
    return this.tasksCollection.doc(task.uid).set({
      ...task
    });
  };
  doUpdateTask = (id, newData) => {
    return this.tasksCollection.doc(id).set({ ...newData }, { merge: true });
  };

  observerTasks = func => {
    return this.tasksCollection.doc().onSnapshot(func);
  };
  doDeleteTask = uid => {
    return this.tasksCollection.doc(uid).delete();
  };
}

export default Firebase;
