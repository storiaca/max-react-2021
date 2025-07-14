import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import configureProductsStore from "./hooks-store/products-store";

import "./index.css";

configureProductsStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
