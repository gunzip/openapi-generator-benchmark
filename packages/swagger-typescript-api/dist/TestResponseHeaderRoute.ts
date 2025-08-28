/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { TestResponseHeaderData } from "./data-contracts";

export namespace TestResponseHeader {
  /**
   * No description
   * @name TestResponseHeader
   * @request GET:/test-response-header
   * @secure
   * @response `201` `TestResponseHeaderData` Will create a Message
   * @response `500` `void` Fatal error
   */
  export namespace TestResponseHeader {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestResponseHeaderData;
  }
}
