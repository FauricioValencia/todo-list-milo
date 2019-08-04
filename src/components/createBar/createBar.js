import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Input, Button, Icon } from "antd";
import classes from "./createBarStyles.module.scss";

export function CreateBar({
  isAddTask,
  onSubmit,
  titleTask,
  setTitleTask,
  onHandleCancelUpdate
}) {
  return (
    <div className={classes.root}>
      <Input
        placeholder="Type your task"
        value={Boolean(titleTask) ? titleTask : ""}
        onChange={e => setTitleTask(e.target.value)}
      />
      <Button onClick={onSubmit} type="primary">
        {isAddTask ? "Add task" : "Update task"}
      </Button>
      {!isAddTask && (
        <Icon type="close-circle" className={classes.iconClose} onClick={onHandleCancelUpdate} />
      )}
    </div>
  );
}

CreateBar.propTypes = {
  isAddTask: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};
