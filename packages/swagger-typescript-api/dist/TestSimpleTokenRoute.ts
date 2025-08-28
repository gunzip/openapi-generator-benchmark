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

import { TestSimpleTokenData } from "./data-contracts";

export namespace TestSimpleToken {
  /**
   * No description
   * @name TestSimpleToken
   * @request GET:/test-simple-token
   * @secure
   * @response `200` `TestSimpleTokenData` Will send `Authenticated`
   * @response `403` `void` You do not have necessary permissions for the resource
   */
  export namespace TestSimpleToken {
    export type RequestParams = {};
    export type RequestQuery = {
      qo?: string;
      qr: string;
      /**
       * An opaque identifier that points to the next item in the collection.
       * @min 1
       */
      cursor?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestSimpleTokenData;
  }
}
