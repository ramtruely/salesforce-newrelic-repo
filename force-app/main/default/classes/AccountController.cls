public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        try {

            return [
                SELECT Id, Name, Industry
                FROM Account
                LIMIT 10
            ];

        } catch(Exception e) {

            // NewRelicLogger.sendLog(
            //     e.getMessage(),
            //     'ERROR'
            // );

            throw new AuraHandledException(
                e.getMessage()
            );
        }
    }

    @AuraEnabled
    public static String simulateError() {

        try {

            Integer x = 10;
            Integer y = 0;

            Integer z = x / y;

            return 'Done';

        } catch(Exception e) {

            // NewRelicLogger.sendLog(
            //     e.getMessage(),
            //     'CRITICAL'
            // );

            throw new AuraHandledException(
                e.getMessage()
            );
        }
    }
}