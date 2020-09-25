//REACT IMPORTS
import React from "react";
import ReactDOM from "react-dom";

//REDUX IMPORTS
import { Provider } from "react-redux";
import store from "./redux/store";
//COMPONENT IMPORTS
import App from "./components/App";

//REDUX SETUP

const root = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
