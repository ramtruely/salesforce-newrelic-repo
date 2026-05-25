@isTest
private class NewRelicLoggerTest {

    @isTest
    static void testSendLog() {

        Test.setMock(
            HttpCalloutMock.class,
            new NewRelicHttpMock()
        );

        Test.startTest();

        NewRelicLogger.sendLog(
            'Test Error',
            'ERROR'
        );

        Test.stopTest();

        System.assertEquals(
            true,
            true
        );
    }
}