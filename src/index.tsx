import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const renderApp = () =>
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
    document.getElementById("root")
  );

renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
