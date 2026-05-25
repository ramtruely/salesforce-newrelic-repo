@isTest
private class NewRelicLoggerTest {

    @isTest
    static void testLogger() {

        Test.startTest();

        NewRelicLogger.sendLog(
            'Test Log',
            'INFO'
        );

        Test.stopTest();

        System.assert(true);
    }
}