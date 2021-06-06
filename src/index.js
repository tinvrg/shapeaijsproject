import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  rootElement
);
