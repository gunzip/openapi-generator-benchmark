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

import { TestParametersAtPathLevelData } from "./data-contracts";

export namespace TestPathLevelParameter {
  /**
   * @description when we declare parameters at path level
   * @name TestParametersAtPathLevel
   * @request GET:/test-path-level-parameter
   * @secure
   * @response `200` `TestParametersAtPathLevelData` Ok
   * @response `500` `void` Fatal error
   */
  export namespace TestParametersAtPathLevel {
    export type RequestParams = {};
    export type RequestQuery = {
      "request-id": string;
      /**
       * An opaque identifier that points to the next item in the collection.
       * @min 1
       */
      cursor?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestParametersAtPathLevelData;
  }
}
