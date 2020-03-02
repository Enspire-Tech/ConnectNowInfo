import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SessionContextProvider } from "./context/session-context";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user-provider";

const createApp: any = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(createApp(), document.getElementById("root"));

serviceWorker.unregister();
