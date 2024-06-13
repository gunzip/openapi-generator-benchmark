import type { Message } from "./Message";

 /**
 * @description Will create a Message
*/
export type TestResponseHeader201 = Message;
/**
 * @description Fatal error
*/
export type TestResponseHeader500 = any;
/**
 * @description Will create a Message
*/
export type TestResponseHeaderQueryResponse = Message;
export type TestResponseHeaderQuery = {
    Response: TestResponseHeaderQueryResponse;
    Errors: TestResponseHeader500;
};