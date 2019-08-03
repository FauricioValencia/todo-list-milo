import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import TasksService from "../../services/tasks/tasks";
import { Task } from "../../components/task/task";
import { modal } from "../../util/modal";
import { tasksActions } from "../../shared/redux/todo";
import classes  from "./DoneStyles.module.scss";
function Done() {
  const dispatch = useDispatch();
  const [taskSelect, setTaskSelect] = useState({});
  const [snapTasks, setSnapTasks] = useState([]);

  useEffect(() => {
    TasksService.observerTasks(snap => {
      const allTasks = snap.docs.map(element => element.data());
      setSnapTasks(allTasks);
      console.log("allTask: ", allTasks);
    });
  }, []);

  const onHandleUpdate = (task, type = 0) => {
    let newTask = {};
    if (type) {
      newTask = { ...task, state: !task.state };
      dispatch(tasksActions.updateTask(newTask));
    } else {
      newTask = { ...task, title: taskSelect.title };
      dispatch(tasksActions.updateTask(newTask));
    }
  };
  const handleDeleteTask = task => dispatch(tasksActions.deleteTask(task));

  const ListTask = () => {
    return snapTasks.map(
      (element, id) =>
        element.state === true && (
          <Task
            key={id}
            {...element}
            onHandleCheck={() => onHandleUpdate(element, 1)}
            handleDeleteTask={() => modal(() => handleDeleteTask(element))}
          />
        )
    );
  };

  return (
    <div className={classes.root}>
      <h2>Task complet</h2>
      {ListTask()}
    </div>
  );
}
export { Done };
