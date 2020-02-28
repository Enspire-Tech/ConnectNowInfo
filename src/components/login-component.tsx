import React, { useState } from "react";
import { useUserState, useUserDispatch, doLogin, getAuthorizedUser } from "../context/user-provider";
import { LogoutComponent } from "./logout";
import logo from "./../assets/boomi-website-logo.svg";
import { Redirect } from "react-router-dom";

require ("../styles/login.css");

export const LoginComponent: React.FC = () => {

    const userState = useUserState();
    const dispatch = useUserDispatch();
    const [authUser, setAuthUser] = useState(userState.user);

    const handleBlur = (e: any) => {
        switch (e.target.name) {
            case "username":
                userState.user.email = e.target.value;
                dispatch({type: "updateState", userState});
                break;
            case "password":
                userState.user.password = e.target.value;
                dispatch({type: "updateState", userState});
                break;
            default:
                break;
        }
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        doLogin(dispatch, {user: userState.user}).then(() => {
            userState.user = getAuthorizedUser();
            setAuthUser(userState.user);
        });
    };

    const handleLogout = () => {
        userState.user = getAuthorizedUser();
        setAuthUser(userState.user);
        console.log("logged out.");
    };

    return (
        <div className="container">
            <div className="form-group row text-center">
                <div className="col-6 offset-3 pad-top">
                    <header>
                        <img className="navbar-brand docs-image" src={logo} alt="boomi logo" />
                    </header>
                    <h1>
                        Connect Now
                    </h1>
                </div>
                <div className="col-6 offset-3 login-container pad-bottom">
                    { userState.user.authorized ? "Hello authed user!" : "Please sign in" }
                </div>
                <div className="col-6 offset-3">
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" className="form-control" type="text" onBlur={handleBlur}></input>
                </div>
                <div className="col-6 offset-3 pad-top">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" className="form-control" type="password" onBlur={handleBlur}></input>
                </div>
                <div className="col-6 offset-3 pad-top">
                    <button className="btn btn-primary navy login" onClick={handleLogin} type="button" disabled={userState.loading}>
                        {
                            !userState.loading &&
                            <span>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span>authenticating</span>
                            </span>
                        }
                        {
                            userState.loading &&
                            <span>
                                <span>sign in</span>
                            </span>
                        }
                        </button>
                </div>
                <div className="col-6 offset-3 pad-top">
                    {authUser.authorized === true && (
                        // <LogoutComponent onLogout={handleLogout} />
                        <Redirect to="/Home" />
                    )}
                </div>
            </div>
        </div>
    );
};
