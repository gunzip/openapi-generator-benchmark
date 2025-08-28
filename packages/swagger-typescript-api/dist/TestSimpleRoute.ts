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

import { TestSimplePatchData } from "./data-contracts";

export namespace TestSimple {
  /**
   * @description simply test of patch endpoint are considered
   * @name TestSimplePatch
   * @request PATCH:/test-simple
   * @secure
   * @response `200` `TestSimplePatchData` Ok
   * @response `500` `void` Fatal error
   */
  export namespace TestSimplePatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestSimplePatchData;
  }
}
