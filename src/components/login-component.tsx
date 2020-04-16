import React, { useState, useEffect } from "react";
import { useUserState, useUserDispatch, doLogin, getAuthorizedUser, isAuthorizedUser } from "../context/user-provider";
import logo from "./../assets/media/boomi-website-logo.svg";
import { Redirect } from "react-router-dom";

require ("../styles/login.css");

export const LoginComponent: React.FC = () => {

    const userState = useUserState();
    const dispatch = useUserDispatch();
    const [shouldRedirect, setShouldRedirct] = useState(false);

    useEffect(() => {
        // console.log("use effect");
        const isAuthorized = isAuthorizedUser();
        setShouldRedirct(isAuthorized);
      }, [shouldRedirect]);

    const handleChange = (e: any) => {
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

        setInterval(() => {
            dispatch({type: "done"});
        }, 100);
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
                            { userState.user.authorized ? "Hello authed user!" : userState.user.failedAuthentication ? "Username or password were incorrect." : "Please sign in" }
                        </div>
                        <div className="col-6 offset-3">
                            <label htmlFor="username">Username</label>
                            <input name="username" id="username" className="form-control" type="text" onChange={handleChange}></input>
                        </div>
                        <div className="col-6 offset-3 pad-top">
                            <label htmlFor="password">Password</label>
                            <input name="password" id="password" className="form-control" type="password" onChange={handleChange}></input>
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
                        <div className="col-6 offset-3 login-container pad-top">
                            <p>
                                <a
                                    href="/Documentation"
                                    title="Service Desk"
                                    target="blank"
                                >
                                    API Reference
                                </a>
                            </p>
                            <p>
                                <a
                                    href="./embedded-bcn/index.html"
                                    title="CN Solutions"
                                    target="blank"
                                >
                                    Boomi Connect Now Embedded
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://flow.manywho.com/abc01a4e-3f09-4f37-a175-643eae3edfcb/play/GA105?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62"
                                    title="CN Production"
                                    target="blank"
                                >
                                    Boomi Connect Now Production
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};
