import settings from "./httpService";
import { apiUrlProduction } from "../config.json";
import IUserProfile from "./../interfaces/IUserProfile";

const apiEndpoint = apiUrlProduction;

const appendMethod = (method: string) => {
    return `${apiEndpoint}/${method}`;
};

const logIn = async (userName: string, password?: string): Promise<IUserProfile> => {
    const user = {
        username: userName,
        accessToken: password
    };

    settings.url = appendMethod("bcn/User/login");
    settings.method = "POST";
    settings.data = JSON.stringify(user);

    let returnUser: IUserProfile = {
        authorized: false,
        active: false,
        failedAuthentication: true
    };

    console.log("logIn settings", settings);

    return $.ajax(settings).done((response: any) => {
        if (response.errorMessage) {
            console.log("user log-in error", response.errorMessage);
            console.log("settings", settings);
        } else {
            returnUser = response;
            returnUser.failedAuthentication = !response.authorized;
        }
    });
};

const upsert = async (userProfile: IUserProfile): Promise<IUserProfile> => {
    const user = {
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        email: userProfile.email,
        password: userProfile.password,
        active: userProfile.active
    };

    settings.url = appendMethod("Upsert");
    settings.method = "POST";
    settings.data = JSON.stringify(user);

    return $.ajax(settings).done((response: IUserProfile) => {
        console.log("upsert " + response);
    });
};

export { logIn, upsert };
