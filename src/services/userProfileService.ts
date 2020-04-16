import settings from "./httpService";
import { apiUrlProduction, apiTimLocalHost } from "../config.json";
import IUserProfile from "./../interfaces/IUserProfile";
import IChangePassword from "./../interfaces/IChangePassword";

const apiEndpoint = apiUrlProduction + "UserProfile";

const appendMethod = (method: string) => {
    return `${apiEndpoint}/${method}`;
};

/*

const getUser = (id: string): AxiosPromise<IUserProfile> => {
    return http.get(appendMethod("UserById/" + id));
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
*/

const logIn = async (userName: string, password?: string): Promise<IUserProfile> => {
    const user = {
        username: userName,
        accessToken: password
    };

    settings.url = appendMethod("Login");
    settings.method = "POST";
    settings.data = JSON.stringify(user);

    let returnUser: IUserProfile = {
        authorized: false,
        active: false,
        failedAuthentication: true
    };

    return $.ajax(settings).done((response: IUserProfile) => {
        returnUser = response;
        returnUser.failedAuthentication = !response.authorized;
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
