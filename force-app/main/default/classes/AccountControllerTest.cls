@isTest
private class AccountControllerTest {

    @testSetup
    static void setupData() {

        List<Account> accounts =
            new List<Account>();

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

        Boolean exceptionThrown = false;

        Test.startTest();

        try {

            AccountController.simulateError();

        } catch(Exception e) {

            exceptionThrown = true;
        }

        Test.stopTest();

        System.assertEquals(
            true,
            exceptionThrown
        );
    }
}
@isTest
static void testGetAccountsAgain() {

    Test.startTest();

    List<Account> accounts =
        AccountController.getAccounts();

    Test.stopTest();

    System.assertNotEquals(
        null,
        accounts
    );
}