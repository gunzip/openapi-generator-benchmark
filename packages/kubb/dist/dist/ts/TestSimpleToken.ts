export type TestSimpleTokenQueryParams = {
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
export type TestSimpleToken200 = any;
/**
 * @description You do not have necessary permissions for the resource
*/
export type TestSimpleToken403 = any;
export type TestSimpleTokenQueryResponse = any;
export type TestSimpleTokenQuery = {
    Response: TestSimpleTokenQueryResponse;
    QueryParams: TestSimpleTokenQueryParams;
    Errors: TestSimpleToken403;
};