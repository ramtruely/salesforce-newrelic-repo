import { LightningElement, wire } from 'lwc';

import getAccounts
from '@salesforce/apex/AccountController.getAccounts';

import simulateError
from '@salesforce/apex/AccountController.simulateError';

export default class AccountDashboard
extends LightningElement {

    accounts;
    error;
    newRelicLoaded = false;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {

        if (data) {

            this.accounts = data;
        }

        if (error) {

            this.error = error;

            console.error(error);
        }
    }

    renderedCallback() {

        if (this.newRelicLoaded) {

            return;
        }

        this.newRelicLoaded = true;

        const script = document.createElement('script');

        script.src =
            'https://js-agent.newrelic.com/nr-loader-spa-current.min.js';

        script.async = true;

        document.head.appendChild(script);

        console.log(
            'New Relic Browser Agent Injected'
        );
    }

    handleError() {

        simulateError()
            .then(result => {

                console.log(result);
            })
            .catch(error => {

                console.error(error);
            });
    }

    triggerFrontendError() {

        throw new Error(
            'Frontend Crash Test'
        );
    }
}