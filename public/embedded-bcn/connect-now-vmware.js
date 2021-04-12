/* eslint-disable no-restricted-globals */
var manywho = {
    cdnUrl: 'https://assets.manywho.com',
    customResources: [
        'https://e609530917e1.ngrok.io/ci-components.js',
        'https://e609530917e1.ngrok.io/ci-components.css',
        'https://e609530917e1.ngrok.io/vmware.css',
    ],
    requires: ['core', 'bootstrap3'],
    initialize: function () {

        manywho.theming.custom('https://e609530917e1.ngrok.io/customstyles.css');
        
        manywho.settings.initialize({
            platform: {
                uri: 'https://flow.manywho.com'
            },
            adminTenantId: 'da497693-4d02-45db-bc08-8ea16d2ccbdf',
            playerUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
            joinUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
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
        
        var tenantId = 'b7493b27-2215-4de8-a0b5-17bbcd94a2e7';
        var flowId = '5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62'; 
        
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
