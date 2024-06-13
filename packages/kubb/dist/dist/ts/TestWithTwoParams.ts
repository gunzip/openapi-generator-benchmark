export type TestWithTwoParamsPathParams = {
    /**
     * @type string
    */
    first_param: string;
    /**
     * @type string
    */
    second_param: string;
};
/**
 * @description Ok
*/
export type TestWithTwoParams200 = any;
/**
 * @description Fatal error
*/
export type TestWithTwoParams500 = any;
export type TestWithTwoParamsQueryResponse = any;
export type TestWithTwoParamsQuery = {
    Response: TestWithTwoParamsQueryResponse;
    PathParams: TestWithTwoParamsPathParams;
    Errors: TestWithTwoParams500;
};