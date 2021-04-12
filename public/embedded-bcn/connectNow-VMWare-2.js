(function() {

    const connectNowUrl = "https://flow.manywho.com/aeafc7cc-7262-460b-9c5b-02114bd71ccb/play/BoomiConnectNow?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";
    const assetBaseUrl = "https://e609530917e1.ngrok.io/";
    const cdnUrl = "https://assets.manywho.com";
    // const platformUri = "https://flow.manywho.com";
    const tenantId = "b7493b27-2215-4de8-a0b5-17bbcd94a2e7";
    const flowId = "5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";
    // const adminTenantId = "da497693-4d02-45db-bc08-8ea16d2ccbdf";

    // var initializeCalled = false;
    // var dataRetrieved = false;
    // var messageData = {}; // Will contain "accountId" and token
    /*
    const initializationSettings = {
        platform: {
            uri: platformUri
        },
        adminTenantId: adminTenantId,
        playerUrl: connectNowUrl,
        joinUrl: connectNowUrl,
        ci: {
            stage: "prod",
            idp: "vmware",
            bma: "SET_BY_MESAGE",
            renderBot: false
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
    */
    /*
    const engineOptions =  {
        replaceUrl: false,
        collaboration: {
            isEnabled: false
        },
        annotations: null,
        navigation: {
            isFixed: true,
            isWizard: false
        },
        callbacks: [],
    };
    */
    /*  =============================================
    deconstructed loader.js
    */
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
        try {
            console.log("messageEvent", messageEvent);
            const messageData = messageEvent.data;
            if (!messageData.accountId) {
                return; // Not our message; just ignore and stop now
            }

            const customResources = [
                assetBaseUrl + "ci-components.js",
                assetBaseUrl + "ci-components.css",
                assetBaseUrl + "vmware.css"
            ];
            const scripts = [];
            customResources.forEach(function (url) {
                if (url.match(".css$")) {
                    appendStylesheet(url);
                }
                else if (url.match(".js$")) {
                    scripts.push(url);
                }
            });

            // var loadedScriptCount = 0;
            if (scripts.length > 0) {
                scripts.forEach(function (url, index, scripts) {
                    appendScript(url, function () {
                    });
                });
            }

            var manywho = {
                cdnUrl: cdnUrl,
                customResources: [
                    assetBaseUrl + "ci-components.js",
                    assetBaseUrl + "ci-components.css",
                    assetBaseUrl + "vmware.css"
                ],
                requires: ["core", "bootstrap3"],
                initialize: function() {
                    
                    manywho.theming.custom('https://e609530917e1.ngrok.io/customstyles.css');
                    manywho.settings.initialize({
                        platform: {
                            uri: 'https://flow.manywho.com'
                        },
                        adminTenantId: 'da497693-4d02-45db-bc08-8ea16d2ccbdf',
                        playerUrl: connectNowUrl,
                        joinUrl: connectNowUrl,
                        ci: {
                            stage: 'prod',
                            idp: 'vmware',
                            bma: 'cdivihwslabs-THR1M7',
                            renderBot: false
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

                    var options = {
                        replaceUrl: false,
                        collaboration: {
                            isEnabled: false
                        },
                        annotations: null,
                        navigation: {
                            isFixed: true,
                            isWizard: false
                        },
                        callbacks: [],
                    };
                    
                    manywho.engine.initialize(
                        tenantId,
                        flowId,
                        '',
                        'main',
                        '',
                        '',
                        options,
                        ''
                    );
                }
            };
        } catch (err) { 
            console.error("message event listener", err.message);
        }

        // TODO: Look up the VMware domain based on the supplied data.accountId
        // Make async request, then call "domainLookupCallback" with the data

        // Example callback:
        // domainLookupCallback(messageEvent.origin, "https://svacdivi.hwslabs.vmware.com");
    });



    /*  =============================================
    deconstructed loader.js
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

    const customResources = [
        assetBaseUrl + "ci-components.js",
        assetBaseUrl + "ci-components.css",
        assetBaseUrl + "vmware.css"
    ];
    const scripts = [];
    customResources.forEach(function (url) {
        if (url.match(".css$")) {
            appendStylesheet(url);
        }
        else if (url.match(".js$")) {
            scripts.push(url);
        }
    });

    // var loadedScriptCount = 0;
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
    */
/*
    manywho.loader = {
        initialize: function (callback, cdnUrl, customResources) {
            var scripts = [];
            if (customResources) {
                customResources.forEach(function (url) {
                    if (url.match('\.css$')) {
                        appendStylesheet(url);
                    }
                    else if (url.match('\.js$')) {
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
*/
    /*  =============================================   */
/*
    function mainInitialize() {

        manywho.theming.custom(assetBaseUrl + "customstyles.css");
        manywho.settings.initialize(initializationSettings);
    
        var options = {
            replaceUrl: false,
            collaboration: {
                isEnabled: false
            },
            annotations: null,
            navigation: {
                isFixed: true,
                isWizard: false
            },
            callbacks: [],
        };

        window.manywho.engine.initialize(
            tenantId,
            flowId,
            "",
            "main",
            "",
            "",
            options,
            "");
    }
*/
/*    
    function domainLookupCallback(messageOrigin, expectedOrigin) {
        if (messageOrigin !== expectedOrigin) {
            return; // Wrong domain; stop now
        }
        // Now we trust the message...
        initializationSettings.ci.bma = messageData.accountId;
        // Make CORS request to verify account and retrieve user info (email address)
        var ssoUserInfoUrl = messageOrigin + "/catalog-portal/services/console/api/v1/sso/user/info";
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("GET", ssoUserInfoUrl);
        xhr.setRequestHeader("Authorization", "Bearer " + messageData.token);
        xhr.addEventListener("load", function() {
            var email = xhr.response.emailAddress;

            console.log("email:", email);

            dataRetrieved = true;
            if (initializeCalled) {
                mainInitialize();
            }
        });
        xhr.send();
    }
*/  
    window.addEventListener("message", function(messageEvent) {
        try {
            console.log("messageEvent", messageEvent);
            const messageData = messageEvent.data;
            if (!messageData.accountId) {
                return; // Not our message; just ignore and stop now
            }
            } catch (err) { 
            console.error("message event listener", err.message);
        }

        // TODO: Look up the VMware domain based on the supplied data.accountId
        // Make async request, then call "domainLookupCallback" with the data

        // Example callback:
        // domainLookupCallback(messageEvent.origin, "https://svacdivi.hwslabs.vmware.com");
    });
    
})();
    