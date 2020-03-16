import React, { useState, useEffect } from "react";
import { useUserState, useUserDispatch, doLogin, getAuthorizedUser, isAuthorizedUser } from "../context/user-provider";
import logo from "./../assets/boomi-website-logo.svg";
import { Redirect } from "react-router-dom";

require ("../styles/login.css");

export const LoginComponent: React.FC = () => {

    const userState = useUserState();
    const dispatch = useUserDispatch();
    const [shouldRedirect, setShouldRedirct] = useState(false);

    useEffect(() => {
        console.log("use effect");
        const isAuthorized = isAuthorizedUser();
        setShouldRedirct(isAuthorized);
      }, [shouldRedirect]);

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
            if (userState.user.authorized) {
                window.location.href = "/Home";
            }
            // setAuthUser(userState.user);
        });
    };

    return (
        <React.Fragment>
            {
                shouldRedirect ? <Redirect to="/Home" /> :
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
                                    userState.loading &&
                                    <span>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span>authenticating</span>
                                    </span>
                                }
                                {
                                    !userState.loading &&
                                    <span>
                                        <span>sign in</span>
                                    </span>
                                }
                                </button>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};
