import { LightningElement, wire } from 'lwc';

import getAccounts
from '@salesforce/apex/AccountController.getAccounts';

import simulateError
from '@salesforce/apex/AccountController.simulateError';

import { loadScript } from 'lightning/platformResourceLoader';

import newRelicAgent
from '@salesforce/resourceUrl/newrelicBrowser';

export default class AccountDashboard
extends LightningElement {

    accounts;
    error;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {

        if(data) {
            this.accounts = data;
        }

        if(error) {
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
}

connectedCallback() {

    loadScript(this, newRelicAgent)
        .then(() => {

            console.log(
                'New Relic Browser Loaded'
            );

        })
        .catch(error => {

            console.error(error);
        });
}

triggerFrontendError() {

    let x = undefined;

    console.log(x.name.test);
}