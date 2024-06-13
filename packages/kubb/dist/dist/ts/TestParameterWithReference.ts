export type TestParameterWithReferenceQueryParams = {
    /**
     * @type string | undefined
    */
    "request-id"?: string;
};
/**
 * @description Created
*/
export type TestParameterWithReference201 = any;
/**
 * @description Fatal error
*/
export type TestParameterWithReference500 = any;
export type TestParameterWithReferenceMutationResponse = any;
export type TestParameterWithReferenceMutation = {
    Response: TestParameterWithReferenceMutationResponse;
    QueryParams: TestParameterWithReferenceQueryParams;
    Errors: TestParameterWithReference500;
};