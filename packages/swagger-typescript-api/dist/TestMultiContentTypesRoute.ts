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

import { NewModel, TestMultiContentTypesData } from "./data-contracts";

export namespace TestMultiContentTypes {
  /**
   * No description
   * @name TestMultiContentTypes
   * @request POST:/test-multi-content-types
   * @response `200` `TestMultiContentTypesData` OK
   * @response `201` `Book` OK
   */
  export namespace TestMultiContentTypes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewModel;
    export type RequestHeaders = {};
    export type ResponseBody = TestMultiContentTypesData;
  }
}
