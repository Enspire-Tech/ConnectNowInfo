/*  =========================  
    Boomi Flow config
    =========================
*/

const tenantId = "da497693-4d02-45db-bc08-8ea16d2ccbdf";

const playerUrl = "https://flow.manywho.com/" + tenantId + "/play/default";

const flowId = "60efda57-1802-4a11-941c-5e1692dc0d59";

const versionId = ""; // 

const engineOptions = {
    authentication: {
        sessionId: "",
        sessionUrl: ""
    },
    navigationElementId: "",
    mode: "",
    reportingMode: "",
    replaceUrl: false,
    collaboration: {
        isEnabled: false
    },
    inputs: [], // flowInputs,
    annotations: null,
    navigation: {
        isFixed: true,
        isWizard: false,
        hideNav: true,
        collapseable: false,
        collapsed: false
    },
    callbacks: [],
    theme: ""
};

var initializeOptions = {
    platform: {
        uri: "https://flow.manywho.com"
    },
    adminTenantId: "da497693-4d02-45db-bc08-8ea16d2ccbdf",
    playerUrl: playerUrl,
    joinUrl: playerUrl,
    outcomes: {
        // Change how outcomes are rendered: icon, iconandtext, iconnobackground
        display: null,
        // Fix outcomes to the bottom of screen
        isFixed: false,
    },
    validation: {
        isEnabled: true
    }
};

var manywho = {
    cdnUrl: "https://assets.manywho.com",
    requires: ["core", "bootstrap3"],
    initialize: function () {

        manywho.settings.initialize(initializeOptions);

        manywho.engine.initialize(
            tenantId,
            flowId,
            versionId, 
            "main",
            "", // join
            "", // authorization
            engineOptions,
            "" // initialization
        );
    }
};
