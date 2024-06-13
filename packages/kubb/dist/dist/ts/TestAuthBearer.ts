export type TestAuthBearerQueryParams = {
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
export type TestAuthBearer200 = any;
/**
 * @description You do not have necessary permissions for the resource
*/
export type TestAuthBearer403 = any;
export type TestAuthBearerQueryResponse = any;
export type TestAuthBearerQuery = {
    Response: TestAuthBearerQueryResponse;
    QueryParams: TestAuthBearerQueryParams;
    Errors: TestAuthBearer403;
};