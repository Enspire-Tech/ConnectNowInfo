import * as React from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router";

export interface IProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPathOnAuthentication: string;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const currentLocation = useLocation();

  let redirectPath = props.redirectPathOnAuthentication;
  if (!props.isAuthenticated) {
    redirectPath = props.authenticationPath;
  }

  if (redirectPath !== currentLocation.pathname) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
