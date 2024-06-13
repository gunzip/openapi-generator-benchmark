export type TestParameterWithDashPathParams = {
    /**
     * @type string
    */
    path_param: string;
};
export type TestParameterWithDashQueryParams = {
    /**
     * @type string | undefined
    */
    "foo-bar"?: string;
    /**
     * @type string | undefined
    */
    "request-id"?: string;
};
export type TestParameterWithDashHeaderParams = {
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
export type TestParameterWithDash200 = any;
/**
 * @description Fatal error
*/
export type TestParameterWithDash500 = any;
export type TestParameterWithDashQueryResponse = any;
export type TestParameterWithDashQuery = {
    Response: TestParameterWithDashQueryResponse;
    PathParams: TestParameterWithDashPathParams;
    QueryParams: TestParameterWithDashQueryParams;
    HeaderParams: TestParameterWithDashHeaderParams;
    Errors: TestParameterWithDash500;
};