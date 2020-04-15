import http from "./httpService";
import { apiTimLocalHost, apiUrlProduction } from "../config.json";
import IUserProfile from "./../interfaces/IUserProfile";
import { AxiosPromise } from "axios";
import IChangePassword from "./../interfaces/IChangePassword";

const apiEndpoint = apiTimLocalHost + "UserProfile";

const appendMethod = (method: string) => {
    return `${apiEndpoint}/${method}`;
};

const getUser = (id: string): AxiosPromise<IUserProfile> => {
    return http.get(appendMethod("UserById/" + id));
};

const logIn = (userName: string, password?: string): AxiosPromise<IUserProfile> => {

    const user = {
        username: userName,
        accessToken: password
    };

    return http.post(appendMethod("Login"), user);
};

const updatePassword = (changePassword: IChangePassword) => {
    const object = {
        id: changePassword.id,
        email: changePassword.email,
        newPassword: changePassword.newPassword,
        confirmNewPassword: changePassword.confirmNewPassword,
        minLength: 5
    };

    return http.post(appendMethod("SetPassword"), object);
};

const updateNameEmail = (userProfile: IUserProfile) => {
    const object = {
        id: userProfile.id,
        email: userProfile.email,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName
    };

    return http.post(appendMethod("SetNameEmail"), object);
};

const upsert = (userProfile: IUserProfile) => {
    const user = {
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        email: userProfile.email,
        password: userProfile.password,
        active: userProfile.active
    };

    return http.post(appendMethod("Upsert"), user);
};

export { getUser, logIn, upsert, updateNameEmail, updatePassword };
