export type TestParametersAtPathLevelQueryParams = {
    /**
     * @type string
    */
    "request-id": string;
    /**
     * @description An opaque identifier that points to the next item in the collection.
     * @type string | undefined
    */
    cursor?: string;
};
/**
 * @description Ok
*/
export type TestParametersAtPathLevel200 = any;
/**
 * @description Fatal error
*/
export type TestParametersAtPathLevel500 = any;
export type TestParametersAtPathLevelQueryResponse = any;
export type TestParametersAtPathLevelQuery = {
    Response: TestParametersAtPathLevelQueryResponse;
    QueryParams: TestParametersAtPathLevelQueryParams;
    Errors: TestParametersAtPathLevel500;
};