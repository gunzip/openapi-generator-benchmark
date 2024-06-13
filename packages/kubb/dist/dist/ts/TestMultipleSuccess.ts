import { OneOfTest } from "./OneOfTest";
import type { Message } from "./Message";

 /**
 * @description Will return a Message
*/
export type TestMultipleSuccess200 = Message;
/**
 * @description Will return just accepted
*/
export type TestMultipleSuccess202 = any;
/**
 * @description You do not have necessary permissions for the resource
*/
export type TestMultipleSuccess403 = OneOfTest;
/**
 * @description Not found
*/
export type TestMultipleSuccess404 = any;
/**
 * @description Will return a Message
*/
export type TestMultipleSuccessQueryResponse = Message;
export type TestMultipleSuccessQuery = {
    Response: TestMultipleSuccessQueryResponse;
    Errors: TestMultipleSuccess403 | TestMultipleSuccess404;
};