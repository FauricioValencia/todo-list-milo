import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uid from "uid";
import { tasksActions } from "../../shared/redux/todo";
import { CreateBar } from "../../components/createBar/createBar";
import { Task } from "../../components/task/task";
import { modal } from "../../util/modal";
import moment from "moment";

function Home() {
  const dispatch = useDispatch();
  const [isAddTask, setIsAddTask] = useState(true);
  const [taskSelect, setTaskSelect] = useState({});
  const tasks = useSelector(({ todo }) => todo.tasks);

  const ListTask = () => {
    return Array.isArray(tasks) && tasks.length
      ? tasks
          .sort((a, b) => a.time - b.time)
          .map(
            (element, id) =>
              element.state === false && (
                <Task
                  key={id}
                  {...element}
                  onHandleCheck={() => onHandleUpdate(element, 1)}
                  handleDeleteTask={() =>
                    modal(() => handleDeleteTask(element))
                  }
                  onHandleUpdateTask={() => handleButtonAddUpdateTask(element)}
                />
              )
          )
      : [];
  };

  const handleTaskFormSubmit = () => {
    if (isAddTask) {
      const body = {
        title: taskSelect.title,
        state: false,
        uid: uid(),
        time: moment().milliseconds()
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
      <div style={{ overflow: "scroll", height: 500 }}>{ListTask()}</div>
    </Fragment>
  );
}
export { Home };
