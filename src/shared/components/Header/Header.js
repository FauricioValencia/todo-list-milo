import React from "react";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import classes from "./HeaderStyles.module.scss";
import { Layout } from "antd";
import "antd/dist/antd.css";
import LOGO_MILO from "../../../assets/logo-alt.png";

const { Header } = Layout;

function HeaderComponent() {
  const tasks = useSelector(({ todo }) => todo.tasks);
  const taskPendent = Array.isArray(tasks)
    ? tasks.filter(tk => tk.state === false)
    : [];
  return (
    <Header className={classes.root}>
      <ul>
        <li>
          <img src={LOGO_MILO} alt="alt-log" />
          <h2>
            <span>Pending tasks:</span>
          {taskPendent.length}
          </h2>
        </li>
        <Link to="/" className={classes.options}>
          <li>Task incomplets</li>
        </Link>
        <Link to="/done" className={classes.options}>
          <li>Tasks complets</li>
        </Link>
      </ul>
    </Header>
  );
}

export default HeaderComponent;
