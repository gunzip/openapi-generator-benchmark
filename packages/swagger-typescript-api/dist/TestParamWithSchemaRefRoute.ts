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
  TestParamWithSchemaRefData,
} from "./data-contracts";

export namespace TestParamWithSchemaRef {
  /**
   * No description
   * @name TestParamWithSchemaRef
   * @request GET:/test-param-with-schema-ref/{param}
   * @secure
   * @response `200` `TestParamWithSchemaRefData` Ok
   */
  export namespace TestParamWithSchemaRef {
    export type RequestParams = {
      param: CustomStringFormatTest;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestParamWithSchemaRefData;
  }
}
