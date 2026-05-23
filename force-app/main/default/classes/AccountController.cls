@isTest
private class AccountControllerTest {

    @testSetup
    static void setupData() {

        List<Account> accounts = new List<Account>();

        for(Integer i=0; i<5; i++) {

            accounts.add(
                new Account(
                    Name = 'Test Account ' + i,
                    Industry = 'IT'
                )
            );
        }

        insert accounts;
    }

    @isTest
    static void testGetAccounts() {

        Test.startTest();

        List<Account> result =
            AccountController.getAccounts();

        Test.stopTest();

        System.assert(result.size() > 0);
    }

    @isTest
    static void testSimulateError() {

        Test.startTest();

        try {

            AccountController.simulateError();

        } catch(Exception e) {

            System.assert(
                e.getMessage().contains('Divide')
                ||
                e.getMessage().contains('zero')
            );
        }

        Test.stopTest();
    }
}