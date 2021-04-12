import { apiUrl, authorization } from "../config.json";

const httpSettings = {
    async: true,
    crossDomain: true,
    contentType: "application/json",
    data: "",
    dataType: "json",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${authorization}`
    },
    method: "",
    processData: false,
    url: apiUrl,
    withCredentials: true,
    timeout: 63000 // sign-up is a longish process
};

export default httpSettings;
