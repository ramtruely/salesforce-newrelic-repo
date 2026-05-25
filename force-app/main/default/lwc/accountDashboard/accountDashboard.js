import { LightningElement, wire } from 'lwc';

import getAccounts
from '@salesforce/apex/AccountController.getAccounts';

import simulateError
from '@salesforce/apex/AccountController.simulateError';

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