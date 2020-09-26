//REACT IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
//ROUTER
import { BrowserRouter as Router } from "react-router-dom";
//COMPONENT IMPORTS
import App from "./components/App";
import { GlobalStyles } from "./Global";
import Theme from "./Theme";

//BABEL regenerationRuntime is not defined fix
import "regenerator-runtime/runtime"; //REDUX IMPORTS

const root = document.querySelector("#root");

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Provider>
  </Router>,
  root
);
