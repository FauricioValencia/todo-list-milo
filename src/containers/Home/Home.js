import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uid from "uid";
import TasksService from "../../services/tasks/tasks";
import { tasksActions } from "../../shared/redux/todo";
import { CreateBar } from "../../components/createBar/createBar";
import { Task } from "../../components/task/task";
import { modal } from "../../util/modal";

function Home() {
  const dispatch = useDispatch();
  const [snapTasks, setSnapTasks] = useState([]);
  const [isAddTask, setIsAddTask] = useState(true);
  const [taskSelect, setTaskSelect] = useState({});
  // const tasks = useSelector(({ todo }) => todo.tasks);
  // console.log("desde redux tasks: ", tasks);

  useEffect(() => {
    TasksService.observerTasks(snap => {
      const allTasks = snap.docs.map(element => element.data());
      setSnapTasks(allTasks);
    });
  }, []);

  const ListTask = () => {
    return snapTasks.map(
      (element, id) =>
        element.state === false && (
          <Task
            key={id}
            {...element}
            onHandleCheck={() => onHandleUpdate(element, 1)}
            handleDeleteTask={() => modal(() => handleDeleteTask(element))}
            onHandleUpdateTask={() => handleButtonAddUpdateTask(element)}
          />
        )
    );
  };

  const handleTaskFormSubmit = () => {
    if (isAddTask) {
      const body = {
        title: taskSelect.title,
        state: false,
        uid: uid()
      };
      dispatch(tasksActions.createTask(body));
    } else {
      onHandleUpdate(taskSelect);
    }
  };
  const handleButtonAddUpdateTask = task => {
    setIsAddTask(false);
    setTaskSelect(task);
  };
  const handleDeleteTask = task => dispatch(tasksActions.deleteTask(task));

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
  return (
    <Fragment>
      <CreateBar
        isAddTask={isAddTask}
        onSubmit={handleTaskFormSubmit}
        titleTask={taskSelect.title}
        setTitleTask={title => setTaskSelect({ ...taskSelect, title })}
        onHandleCancelUpdate={() => {
          setIsAddTask(true);
          setTaskSelect({});
        }}
      />
      <div style={{ overflow: "scroll" }}>{ListTask()}</div>
    </Fragment>
  );
}
export { Home };
