public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        return [
            SELECT Id, Name, Industry
            FROM Account
            LIMIT 10
        ];
    }

    @AuraEnabled
    public static String simulateError() {

        Integer x = 10;
        Integer y = 0;

        Integer z = x / y;

        return 'Done';
    }
}