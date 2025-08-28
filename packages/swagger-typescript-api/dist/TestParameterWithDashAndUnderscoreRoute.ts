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

import { TestParameterWithDashAnUnderscoreData } from "./data-contracts";

export namespace TestParameterWithDashAndUnderscore {
  /**
   * No description
   * @name TestParameterWithDashAnUnderscore
   * @request GET:/test-parameter-with-dash-and_underscore/{path-param}
   * @secure
   * @response `200` `TestParameterWithDashAnUnderscoreData` Ok
   * @response `500` `void` Fatal error
   */
  export namespace TestParameterWithDashAnUnderscore {
    export type RequestParams = {
      pathParam: string;
    };
    export type RequestQuery = {
      foo_bar?: string;
      /** @minLength 10 */
      "request-id"?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      headerInlineParam: string;
      /** A header param which has dashes in it */
      "x-header-param": string;
    };
    export type ResponseBody = TestParameterWithDashAnUnderscoreData;
  }
}
