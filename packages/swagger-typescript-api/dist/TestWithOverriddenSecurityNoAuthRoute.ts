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

import { TestOverriddenSecurityNoAuthData } from "./data-contracts";

export namespace TestWithOverriddenSecurityNoAuth {
  /**
   * No description
   * @name TestOverriddenSecurityNoAuth
   * @request GET:/test-with-overridden-security-no-auth
   * @response `200` `TestOverriddenSecurityNoAuthData` Ok
   */
  export namespace TestOverriddenSecurityNoAuth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestOverriddenSecurityNoAuthData;
  }
}
