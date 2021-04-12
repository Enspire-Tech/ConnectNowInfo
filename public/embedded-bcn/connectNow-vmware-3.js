const platformUrl = "https://flow.manywho.com";
const connectNowUrl = "https://flow.manywho.com/aeafc7cc-7262-460b-9c5b-02114bd71ccb/play/BoomiConnectNow?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";
const assetBaseUrl = "https://e609530917e1.ngrok.io/";
const cdnUrl = "https://assets.manywho.com";
const tenantId = "b7493b27-2215-4de8-a0b5-17bbcd94a2e7";
const flowId = "5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";

var manywho = {
    cdnUrl: cdnUrl,
    customResources: [
        assetBaseUrl + "ci-components.js",
        assetBaseUrl + "ci-components.css"
    ],
    requires: ["core", "bootstrap3"],
    
    initialize: function () {

        // var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));
        
        manywho.theming.custom(assetBaseUrl + "customstyles.css");
        
        manywho.settings.initialize({
            platform: {
                uri: platformUrl
            },
            adminTenantId: "da497693-4d02-45db-bc08-8ea16d2ccbdf",
            playerUrl: connectNowUrl,
            joinUrl: connectNowUrl,
            ci: {
                stage: "prod",
                idp: "vmware" /*,
                bma: messageData.accountId
                */
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
        });

        // querystring elements to Flow Values
        var flowInputs = null;
        var inputs = [];
        
        if(inputs.length > 0) {
            flowInputs = manywho.json.generateFlowInputs(inputs);
        }

        var options = {
            replaceUrl: false,
            collaboration: {
                isEnabled: false
            },
            inputs: flowInputs,
            annotations: null,
            navigation: {
                isFixed: true,
                isWizard: false
            },
            callbacks: []
        };

        manywho.engine.initialize(
            tenantId,
            flowId,
            "",
            "main",
            "",
            "",
            options,
            ""
        );
    }
};

(function(manywho, window, $) {

    console.log("v3 starting");
    var messageData = {}; // Will contain "accountId" and token
    
    function appendScript(url, onLoad) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.onload = onLoad;
        script.src = url;
        document.head.appendChild(script);
    }
    function appendStylesheet(url, id) {
        var compiledStyles = document.createElement("link");
        compiledStyles.rel = "stylesheet";
        compiledStyles.href = url;
        compiledStyles.id = id;
        document.head.appendChild(compiledStyles);
    }

    window.addEventListener("message", function(messageEvent) {
        if (!messageEvent.data || !messageEvent.data.accountId) {
            return; // Not our message; just ignore and stop now
        }
        // debugger;
        messageData = messageEvent.data;
        console.log("messageData", messageData);
        /*
        manywho.loader = {
            initialize: function (callback, cdnUrl, customResources) {
                var scripts = [];
                if (customResources) {
                    customResources.forEach(function (url) {
                        if (url.match(".css$")) {
                            appendStylesheet(url);
                        }
                        else if (url.match(".js$")) {
                            scripts.push(url);
                        }
                    });
                }
                var loadedScriptCount = 0;
                if (scripts.length > 0) {
                    scripts.forEach(function (url, index, scripts) {
                        appendScript(url, function () {
                            loadedScriptCount++;
                            if (loadedScriptCount === scripts.length) {
                                callback();
                            }
                        });
                    });
                }
                else {
                    callback();
                }
            }
        };

        manywho.loader.initialize(manywho.initialize, manywho.cdnUrl, manywho.customResources);
        */
        // TODO: Look up the VMware domain in your system, based on the supplied messageData.accountId
        // Make AJAX request, then call "domainLookupCallback" with the correct VMware origin as the 2nd parameter
        // Example callback:
        // var vmwareOrigin = "https://svacdivi.hwslabs.vmware.com";
        // domainLookupCallback(messageEvent.origin, vmwareOrigin);
    });
    
// eslint-disable-next-line no-undef
}(manywho, window, jQuery));
