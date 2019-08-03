import React from "react";
import { Link } from "@reach/router";
import classes from "./HeaderStyles.module.scss";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header } = Layout;

const LOGO_MILO = "../../../assets/logo-alt.png";
function HeaderComponent() {
  return (
    <Header className={classes.root}>
      <ul>
        <li>
          <img src={LOGO_MILO} alt="alt-log" />
          Task Actives # 
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
