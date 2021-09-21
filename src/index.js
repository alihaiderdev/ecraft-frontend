import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, {persistor} from "./Redux/store";
import { Router } from "react-router-dom";
import history from "./history";
import axios from "axios";
import Cookies from "js-cookie";
import { host } from "./contstants";
import { PersistGate } from "redux-persist/integration/react";

//setting up default config for axios
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";
axios.defaults.headers.common = {
  Authorization: `Bearer ${Cookies.get("jwt")}`,
};
axios.defaults.baseURL = `${host}`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
