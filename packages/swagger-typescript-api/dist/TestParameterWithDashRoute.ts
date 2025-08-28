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

import { TestParameterWithDashData } from "./data-contracts";

export namespace TestParameterWithDash {
  /**
   * No description
   * @name TestParameterWithDash
   * @request GET:/test-parameter-with-dash/{path-param}
   * @secure
   * @response `200` `TestParameterWithDashData` Ok
   * @response `500` `void` Fatal error
   */
  export namespace TestParameterWithDash {
    export type RequestParams = {
      /** @minLength 5 */
      pathParam: string;
    };
    export type RequestQuery = {
      "foo-bar"?: string;
      /** @minLength 10 */
      "request-id"?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      headerInlineParam: string;
      /** A header param which has dashes in it */
      "x-header-param": string;
    };
    export type ResponseBody = TestParameterWithDashData;
  }
}
