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

import {
  CustomStringFormatTest,
  TestHeaderWithSchemaRefData,
} from "./data-contracts";

export namespace TestHeaderWithSchemaRef {
  /**
   * No description
   * @name TestHeaderWithSchemaRef
   * @request GET:/test-header-with-schema-ref
   * @secure
   * @response `200` `TestHeaderWithSchemaRefData` Ok
   */
  export namespace TestHeaderWithSchemaRef {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      param: CustomStringFormatTest;
    };
    export type ResponseBody = TestHeaderWithSchemaRefData;
  }
}
