import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";

import "./App.scss";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer className="app-footer">Created by Julian Valencia</Footer>
    </>
  );
}

export default App;
