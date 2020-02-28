import React from "react";
import { useUserState, useUserDispatch, doLogOut } from "../context/user-provider";
import IUserProfile from "./../interfaces/IUserProfile";

interface ILogoutProps {
    onLogout: () => void;
}

export const LogoutComponent = (props: ILogoutProps) => {
    const state = useUserState();
    const dispatch = useUserDispatch();

    const handleLogout = (e: any) => {
        const emptyUser: IUserProfile = {
            authorized: false,
            active: false
        };
        state.user = emptyUser;
        e.preventDefault();
        doLogOut(dispatch).then(() => {
            dispatch({type: "updateState", userState: state});
            props.onLogout();
        });
    };

    return (
        <React.Fragment>
            <button className="btn btn-primary login" onClick={handleLogout} type="button">sign-out</button>
        </React.Fragment>
    );
};
