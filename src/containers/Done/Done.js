import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Task } from "../../components/task/task";
import { modal } from "../../util/modal";
import { tasksActions } from "../../shared/redux/todo";
import classes from "./DoneStyles.module.scss";
function Done() {
  const dispatch = useDispatch();
  const tasks = useSelector(({ todo }) => todo.tasks);

  const onHandleUpdate = (task, type = 0) => {
    let newTask = {};
    if (type) {
      newTask = { ...task, state: !task.state };
      dispatch(tasksActions.updateTask(newTask));
    }
  };
  const handleDeleteTask = task => dispatch(tasksActions.deleteTask(task));

  const ListTask = () => {
    return Array.isArray(tasks)
      ? tasks.map(
          (element, id) =>
            element.state === true && (
              <Task
                key={id}
                {...element}
                onHandleCheck={() => onHandleUpdate(element, 1)}
                handleDeleteTask={() => modal(() => handleDeleteTask(element))}
              />
            )
        )
      : [];
  };

  return (
    <div className={classes.root}>
      <h2>Task complet</h2>
      {ListTask()}
    </div>
  );
}
export { Done };
