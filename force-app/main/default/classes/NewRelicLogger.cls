public class NewRelicLogger {

    @future(callout=true)
    public static void sendLog(
        String message,
        String level
    ) {

        Http http = new Http();

        HttpRequest req = new HttpRequest();

        req.setEndpoint(
            'https://log-api.newrelic.com/log/v1'
        );

        req.setMethod('POST');

        req.setHeader(
            'Content-Type',
            'application/json'
        );

        req.setHeader(
            'Api-Key',
            'YOUR_NEWRELIC_LICENSE_KEY'
        );

        String requestBody =
        '[{' +
            '"message":"' + message + '",' +
            '"level":"' + level + '"' +
        '}]';

        req.setBody(requestBody);

        HttpResponse response =
            http.send(req);

        System.debug(response.getBody());
    }
}