// Boomi Flow config      

const assetUrl = "https://files-manywho-com.s3.amazonaws.com/aeafc7cc-7262-460b-9c5b-02114bd71ccb/";
const tenantId = "b7493b27-2215-4de8-a0b5-17bbcd94a2e7";
const playerUrl = "https://flow.manywho.com/" + tenantId + "/play/prod";
const flowId = "5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";

const versionId = "";

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
    ci: {
        stage: "prod",
        idp: "",
        bma: "",
        messageOrigin: "",
        token: "",
        userInfoApiUrl: ""
    },
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
    customResources: [
        assetUrl + "ci-components.js",
        assetUrl + "ci-components.css"
    ],
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

