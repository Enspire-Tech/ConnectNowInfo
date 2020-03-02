import React from "react";
import "./styles/App.css";
import "./styles/styles.css";
import {Home} from "./components/home";
import { Documentation } from "./components/documentation";
import { LoginComponent } from "./components/login-component";
import { isAuthorizedUser } from "./context/user-provider";
import { Switch, Route } from "react-router";
import ProtectedRoute, { ProtectedRouteProps } from "./components/protected-route";

const CNApp: React.FC = () => {

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: isAuthorizedUser(),
    authenticationPath: "/",
    redirectPathOnAuthentication: "/Home"
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
