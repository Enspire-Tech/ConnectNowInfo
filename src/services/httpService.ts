import { apiKeyDev, apiKeyProduction } from "../config.json";

const settings = {
    async: true,
    crossDomain: true,
    url: "",
    method: "",
    withCredentials: false,
    headers: {
        "x-api-key": apiKeyDev,
        "Content-Type": "application/json"
    },
    processData: false,
    dataType: "json",
    contentType: "application/json",
    data: ""
};

export default settings;
