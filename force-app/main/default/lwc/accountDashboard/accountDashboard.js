import { LightningElement, wire } from 'lwc';

import getAccounts
from '@salesforce/apex/AccountController.getAccounts';

import simulateError
from '@salesforce/apex/AccountController.simulateError';

import { loadScript } from 'lightning/platformResourceLoader';

import newRelicBrowser
from '@salesforce/resourceUrl/newrelicBrowser';

export default class AccountDashboard extends LightningElement {

    accounts;
    error;

    connectedCallback() {

        loadScript(this, newRelicBrowser)
            .then(() => {

                console.log(
                    'New Relic Browser Agent Injected'
                );

            })
            .catch(error => {

                console.error(error);
            });
    }

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
            'Salesforce Frontend Test Error'
        );
    }
}