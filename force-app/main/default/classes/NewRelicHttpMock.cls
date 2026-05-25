@isTest
global class NewRelicHttpMock
implements HttpCalloutMock {

    global HttpResponse respond(
        HttpRequest req
    ) {

        HttpResponse res =
            new HttpResponse();

        res.setStatusCode(200);

        res.setBody('Success');

        return res;
    }
}