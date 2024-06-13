export type TestAuthBearerHttpQueryParams = {
    /**
     * @type string | undefined
    */
    qo?: string;
    /**
     * @type string
    */
    qr: string;
    /**
     * @description An opaque identifier that points to the next item in the collection.
     * @type string | undefined
    */
    cursor?: string;
};
/**
 * @description Will send `Authenticated`
*/
export type TestAuthBearerHttp200 = any;
/**
 * @description You do not have necessary permissions for the resource
*/
export type TestAuthBearerHttp403 = any;
export type TestAuthBearerHttpQueryResponse = any;
export type TestAuthBearerHttpQuery = {
    Response: TestAuthBearerHttpQueryResponse;
    QueryParams: TestAuthBearerHttpQueryParams;
    Errors: TestAuthBearerHttp403;
};