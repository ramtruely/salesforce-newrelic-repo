import { LightningElement } from 'lwc';

export default class AccountDashboard extends LightningElement {

    connectedCallback() {
        this.loadNewRelic();
    }

    loadNewRelic() {
        if (window.NREUM) {
            console.log('New Relic already loaded');
            return;
        }

        const script = document.createElement('script');

        script.src = 'https://js-agent.newrelic.com/nr-loader-spa-current.min.js';

        script.onload = () => {

            window.NREUM = window.NREUM || {};

            window.NREUM.init = {
                distributed_tracing: {
                    enabled: true
                },
                privacy: {
                    cookies_enabled: true
                },
                ajax: {
                    deny_list: ['bam.nr-data.net']
                }
            };

            window.NREUM.loader_config = {
                accountID: '8088972',
                trustKey: '8088972',
                agentID: '1431932730',
                licenseKey: 'fe5d3bbf8948aac3f06c39d77d226e18ec94NRAL',
                applicationID: '1431932730'
            };

            window.NREUM.info = {
                beacon: 'bam.nr-data.net',
                errorBeacon: 'bam.nr-data.net',
                licenseKey: 'fe5d3bbf8948aac3f06c39d77d226e18ec94NRAL',
                applicationID: '1431932730',
                sa: 1
            };

            console.log('New Relic Browser Agent Injected');
        };

        script.onerror = () => {
            console.error('Failed to load New Relic');
        };

        document.head.appendChild(script);
    }

    triggerFrontendError() {

        console.log('Triggering frontend error');

        try {
            throw new Error('Salesforce LWC Frontend Test Error');
        } catch (error) {

            console.error(error);

            if (window.newrelic) {
                window.newrelic.noticeError(error);
            }
        }
    }
}