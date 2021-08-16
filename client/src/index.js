import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";
import PostContextProvaider from "./contexts/PostContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PostContextProvaider>
          <App />
        </PostContextProvaider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
