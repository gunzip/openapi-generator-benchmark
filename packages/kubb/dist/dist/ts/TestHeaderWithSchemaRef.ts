import { CustomStringFormatTest } from "./CustomStringFormatTest";

 export type TestHeaderWithSchemaRefHeaderParams = {
    param: CustomStringFormatTest;
};
/**
 * @description Ok
*/
export type TestHeaderWithSchemaRef200 = any;
export type TestHeaderWithSchemaRefQueryResponse = any;
export type TestHeaderWithSchemaRefQuery = {
    Response: TestHeaderWithSchemaRefQueryResponse;
    HeaderParams: TestHeaderWithSchemaRefHeaderParams;
};