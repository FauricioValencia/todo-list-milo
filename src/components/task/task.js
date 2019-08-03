import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Icon } from "antd";
import classes from "./taskStyles.module.scss";

export function Task({
  state,
  title,
  handleDeleteTask,
  onHandleCheck,
  onHandleUpdateTask
}) {
  return (
    <div className={classes.root}>
      <div className={classes.containerTask}>
        <Icon
          type="check-circle"
          className={state ? classes.iconCheckTrue : classes.iconCheckFalse}
          onClick={onHandleCheck}
          state={state}
        />
        <p>{title}</p>
      </div>
      {!state && (
        <Icon
          type="edit"
          className={classes.iconEdit}
          onClick={onHandleUpdateTask}
        />
      )}
      <Icon
        type="delete"
        className={classes.iconDelete}
        onClick={handleDeleteTask}
      />
    </div>
  );
}

Task.propTypes = {
  state: PropTypes.bool,
  title: PropTypes.string,
  handleDeleteTask: PropTypes.func,
  onHandleCheck: PropTypes.func,
  onHandleUpdateTask: PropTypes.func
};
