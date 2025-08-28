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
  TestHeaderOptionalData,
} from "./data-contracts";

export namespace TestHeaderOptional {
  /**
   * No description
   * @name TestHeaderOptional
   * @request GET:/test-header-optional
   * @secure
   * @response `200` `TestHeaderOptionalData` Ok
   */
  export namespace TestHeaderOptional {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      param?: CustomStringFormatTest;
    };
    export type ResponseBody = TestHeaderOptionalData;
  }
}
