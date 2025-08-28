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

import { TestMultipleSuccessData } from "./data-contracts";

export namespace TestMultipleSuccess {
  /**
   * No description
   * @name TestMultipleSuccess
   * @request GET:/test-multiple-success
   * @secure
   * @response `200` `TestMultipleSuccessData` Will return a Message
   * @response `202` `void` Will return just accepted
   * @response `403` `OneOfTest` You do not have necessary permissions for the resource
   * @response `404` `void` Not found
   */
  export namespace TestMultipleSuccess {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestMultipleSuccessData;
  }
}
