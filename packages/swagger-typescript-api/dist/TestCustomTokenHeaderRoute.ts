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

import { TestCustomTokenHeaderData } from "./data-contracts";

export namespace TestCustomTokenHeader {
  /**
   * No description
   * @name TestCustomTokenHeader
   * @request GET:/test-custom-token-header
   * @secure
   * @response `200` `TestCustomTokenHeaderData` Will send `Authenticated`
   * @response `403` `void` You do not have necessary permissions for the resource
   */
  export namespace TestCustomTokenHeader {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestCustomTokenHeaderData;
  }
}
