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

import { TestWithTwoParamsData } from "./data-contracts";

export namespace TestTwoPathParams {
  /**
   * No description
   * @name TestWithTwoParams
   * @request GET:/test-two-path-params/{first-param}/{second-param}
   * @secure
   * @response `200` `TestWithTwoParamsData` Ok
   * @response `500` `void` Fatal error
   */
  export namespace TestWithTwoParams {
    export type RequestParams = {
      firstParam: string;
      secondParam: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestWithTwoParamsData;
  }
}
