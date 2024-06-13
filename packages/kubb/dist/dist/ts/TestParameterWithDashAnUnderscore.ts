export type TestParameterWithDashAnUnderscorePathParams = {
    /**
     * @type string
    */
    path_param: string;
};
export type TestParameterWithDashAnUnderscoreQueryParams = {
    /**
     * @type string | undefined
    */
    foo_bar?: string;
    /**
     * @type string | undefined
    */
    "request-id"?: string;
};
export type TestParameterWithDashAnUnderscoreHeaderParams = {
    /**
     * @type string
    */
    headerInlineParam: string;
    /**
     * @description A header param which has dashes in it
     * @type string
    */
    "x-header-param": string;
};
/**
 * @description Ok
*/
export type TestParameterWithDashAnUnderscore200 = any;
/**
 * @description Fatal error
*/
export type TestParameterWithDashAnUnderscore500 = any;
export type TestParameterWithDashAnUnderscoreQueryResponse = any;
export type TestParameterWithDashAnUnderscoreQuery = {
    Response: TestParameterWithDashAnUnderscoreQueryResponse;
    PathParams: TestParameterWithDashAnUnderscorePathParams;
    QueryParams: TestParameterWithDashAnUnderscoreQueryParams;
    HeaderParams: TestParameterWithDashAnUnderscoreHeaderParams;
    Errors: TestParameterWithDashAnUnderscore500;
};