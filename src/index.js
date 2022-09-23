import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./app/layout/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <App />
      </BrowserRouter>
    </Provider>
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();
