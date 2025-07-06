import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ProducsProvider from "./context/products-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProducsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProducsProvider>
);
