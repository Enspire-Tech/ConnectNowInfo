import React, { useState } from "react";
import "./App.css";
import "./styles/styles.css";
import {Home} from "./components/home";
import { Documentation } from "./components/documentation";
import { LoginComponent } from "./components/login-component";

import { useUserState } from "./context/user-provider";

import { Switch, Route } from "react-router";
import ProtectedRoute, { ProtectedRouteProps } from "./components/protected-route";
import { useSessionContext } from "./context/session-context";

const CNApp: React.FC = () => {

  const [sessionContext, updateSessionContext] = useSessionContext();

  const userState = useUserState();

  const setRedirectPathOnAuthentication = (path: string) => {
    updateSessionContext({...sessionContext, redirectPathOnAuthentication: path});
  }

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: userState.user.authorized ? true : false,
    authenticationPath: "/",
    redirectPathOnAuthentication: sessionContext.redirectPathOnAuthentication || "/Home",
    setRedirectPathOnAuthentication
  };

  return (
    <div className="CNApp">
        <Switch>
          <Route path="/" exact component={LoginComponent} />
          <ProtectedRoute {...defaultProtectedRouteProps} path="/Home" exact component={Home} />
          <Route path="/Documentation" exact component={Documentation} />
        </Switch>
    </div>
  );
}

export default CNApp;
