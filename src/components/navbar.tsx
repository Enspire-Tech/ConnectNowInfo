import React from "react";
import logo from "./../assets/boomi-website-logo.svg";
import { LogoutComponent } from "./logout";

export const NavBar: React.FC = () => {

    const handleLogout = () => {
        window.location.href = "/";
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="top-navigation col-12"></div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <div className="col-1">&nbsp;</div>
                    <div className="col-3">
                        <a href="https://boomi.com">
                        <img
                            className="navbar-brand"
                            src={logo}
                            alt="boomi logo"
                        />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-8">
                        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                            {/* <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="">API Reference</a>
                                </li>
                            </ul> */}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <LogoutComponent onLogout={handleLogout} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
      );
};
