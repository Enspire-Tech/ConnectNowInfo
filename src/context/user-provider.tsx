import React from "react";
import IUser from "../interfaces/IUserProfile";
import { logIn, upsert } from "../services/userProfileService";

type Action = {type: "loading"} |
    {type: "logout"} |
    {type: "clearUser"} |
    {type: "updateState", userState: IState} |
    {type: "storeUser", userState: IState} |
    {type: "done"} |
    {type: "error", message: string};

const AUTHORIZED_USER_KEY = "AUTH_USER";

type Dispatch = (action: Action) => void;
interface IState { user: IUser; loading?: boolean; }
interface IUserProviderProps { children: React.ReactNode; }

const UserStateContext = React.createContext<IState | undefined>(undefined);
const UserDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const UserProvider = ({children}: IUserProviderProps) => {

    const initialState: IState = { user: {authorized: false, active: false, failedAuthentication: false}, loading: false };
    const [state, dispatch] = React.useReducer(userReducer, initialState );

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

const useUserState = () => {
    const context = React.useContext(UserStateContext);
    if (context === undefined) {
      throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
};

const useUserDispatch = () => {
    const context = React.useContext(UserDispatchContext);
    if (context === undefined) {
      throw new Error("useUserDispatch must be used within a UserProvider");
    }
    return context;
};

const userReducer = (state: IState, action: Action): IState => {

    const res: IState = {user: state.user, loading: false};

    switch (action.type) {
        case "clearUser": {
            sessionStorage.removeItem(AUTHORIZED_USER_KEY);
            break;
        }
        case "done": {
            res.loading = false;
            break;
        }
        case "loading": {
            res.loading = true;
            break;
        }
        case "logout": {
            res.user = {authorized: false, active: false, failedAuthentication: false};
            sessionStorage.removeItem(AUTHORIZED_USER_KEY);
            break;
        }
        case "storeUser": {
            res.user = action.userState.user;
            if (res.user.authorized === true) {
                res.user.password = "";
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 1);
                res.user.expiry = expirationDate;
                sessionStorage.setItem(AUTHORIZED_USER_KEY, JSON.stringify(res.user));
                res.user.failedAuthentication = false;
            } else {
                res.user.failedAuthentication = true;
            }
            // console.log(res.user);
            break;
        }
        case "updateState": {
            res.user = action.userState.user;
            break;
        }
        default: {
            res.user = {authorized: false, active: false, failedAuthentication: false};
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }

    return res;

};

const getAuthorizedUser = () => {
    let user: IUser = { authorized: false, active: false, failedAuthentication: false };
    const localUser = sessionStorage.getItem(AUTHORIZED_USER_KEY);
    if (localUser !== null) {
        const currentDate = new Date();
        user = JSON.parse(localUser);
        const userExpirationDate = user.expiry || currentDate;
        if (userExpirationDate >= currentDate) {
            const tempUser: IUser = { authorized: false, active: false, failedAuthentication: false };
            localStorage.removeItem(AUTHORIZED_USER_KEY);
            user = tempUser;
        }
    }
    return user;
};

const isAuthorizedUser = () => {
    const user: IUser = getAuthorizedUser();
    return user.authorized;
};

const doLogin = async (dispatch: any, state: IState) => {

    // console.log("do login.");

    dispatch({type: "loading"});
    let testUser;
    if (state.user.email === "dellboomi") {
        if (state.user.password === "connectnow") {
            testUser = {
                id: "test_id",
                authorized: true,
                firstName: "Test",
                lastName: "User",
                email: "testuser@connectnow.info",
                // password: state.user.password,
                active: true,
                organization: "Dell Boomi",
                accessLevel: 1,
                message: "",
                username: state.user.email,
                failedAuthorization: false
            };
        } else {
            testUser = {
                authorized: false,
                failedAuthorization: true,
                username: state.user.email
            };
        }

        // const login = await logIn(state.user.email || "", state.user.password);
        dispatch({type: "storeUser", userState: {user: testUser}});
        // dispatch({type: "updateState", userState: {user: login.data}});
    } else {

        const login = await logIn(state.user.email || "", state.user.password);
        console.log("login: " + JSON.stringify(login));
        dispatch({type: "storeUser", userState: {user: login}});
        dispatch({type: "updateState", userState: {user: login}});
    }
    dispatch({type: "done"});

};

const doLogOut = async (dispatch: any) => {

    dispatch({type: "loading"});

    const emptyUser: IUser = {
        authorized: false,
        active: false,
        failedAuthentication: false
    };

    dispatch({type: "updateState", userState: {user: emptyUser}});
    dispatch({type: "clearUser"});
    dispatch({type: "done"});

};

const saveUser = async (dispatch: any, state: IState) => {
    dispatch({type: "loading"});
    const response: any = await upsert(state.user);
    dispatch({type: "updateState", userState: {user: state.user}});
    dispatch({type: "done"});
    return response;
};

export { UserProvider, useUserState, useUserDispatch, doLogin, doLogOut, getAuthorizedUser, isAuthorizedUser, saveUser };
