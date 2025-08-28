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

import { NewModel, TestParameterWithBodyReferenceData } from "./data-contracts";

export namespace TestParameterWithBodyRef {
  /**
   * No description
   * @name TestParameterWithBodyReference
   * @request POST:/test-parameter-with-body-ref
   * @secure
   * @response `201` `TestParameterWithBodyReferenceData` Created
   * @response `500` `void` Fatal error
   */
  export namespace TestParameterWithBodyReference {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewModel;
    export type RequestHeaders = {};
    export type ResponseBody = TestParameterWithBodyReferenceData;
  }
}
