import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App.jsx";
import store from "./store.js";
import GlobalStyles from "./style/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
