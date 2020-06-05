import httpSettings from "./httpService";
import { apiUrl } from "../config.json";
import IUserProfile from "./../interfaces/IUserProfile";

const logIn = async (userName: string, password?: string): Promise<IUserProfile> => {

    const user = {
        username: userName,
        accessToken: password
    };

    httpSettings.url = `${apiUrl}/User/login`;
    httpSettings.method = "POST";
    httpSettings.data = JSON.stringify(user);

    let returnUser: IUserProfile = {
        authorized: false,
        active: false,
        failedAuthentication: true
    };

    // console.log("logIn settings", settings);

    return $.ajax(httpSettings).done((response: any) => {
        if (response.errorMessage) {
            console.log("user log-in error", response.errorMessage);
            console.log("settings", httpSettings);
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

    httpSettings.url = `${apiUrl}/User/upsert`;
    httpSettings.method = "POST";
    httpSettings.data = JSON.stringify(user);

    return $.ajax(httpSettings).done((response: IUserProfile) => {
        console.log("upsert " + response);
    });
};

export { logIn, upsert };
