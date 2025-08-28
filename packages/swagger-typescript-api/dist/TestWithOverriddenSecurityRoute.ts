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

import { TestOverriddenSecurityData } from "./data-contracts";

export namespace TestWithOverriddenSecurity {
  /**
   * No description
   * @name TestOverriddenSecurity
   * @request GET:/test-with-overridden-security
   * @secure
   * @response `200` `TestOverriddenSecurityData` Ok
   */
  export namespace TestOverriddenSecurity {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestOverriddenSecurityData;
  }
}
