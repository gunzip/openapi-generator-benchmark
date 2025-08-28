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

import { TestParameterWithReferenceData } from "./data-contracts";

export namespace TestParameterWithReference {
  /**
   * No description
   * @name TestParameterWithReference
   * @request POST:/test-parameter-with-reference
   * @secure
   * @response `201` `TestParameterWithReferenceData` Created
   * @response `500` `void` Fatal error
   */
  export namespace TestParameterWithReference {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @minLength 10 */
      "request-id"?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestParameterWithReferenceData;
  }
}
