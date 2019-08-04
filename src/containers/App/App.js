import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { tasksActions } from "../../shared/redux/todo";
import { Layout } from "antd";
import TasksService from "../../services/tasks/tasks";
import store from "../../shared/redux";

import "./App.scss";

// ? pages
import { Home } from "../Home/Home";
import { Done } from "../Done/Done";
import { Error404 } from "../../shared/components/Error404/Error404";

// ? components
import HeaderComponent from "../../shared/components/Header/Header";
const { Content, Footer } = Layout;
// export const Store = store;
function App() {
  useEffect(() => {
    TasksService.observerTasks(snap => {
      const allTasks = snap.docs.map(element => element.data());
      store.dispatch(tasksActions.saveDataFromFirebase(allTasks));
    });
  }, []);

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100%" }}>
        <HeaderComponent />
        <Content>
          <Router>
            <Home path="/" />
            <Done path="/done" />
            <Error404 default />
          </Router>
        </Content>
        <Footer className="app-footer">Created by Julian Valencia</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
