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

import { TestAuthBearerData } from "./data-contracts";

export namespace TestAuthBearer {
  /**
   * No description
   * @name TestAuthBearer
   * @request GET:/test-auth-bearer
   * @secure
   * @response `200` `TestAuthBearerData` Will send `Authenticated`
   * @response `403` `void` You do not have necessary permissions for the resource
   */
  export namespace TestAuthBearer {
    export type RequestParams = {};
    export type RequestQuery = {
      qo?: string;
      qr: string;
      /**
       * An opaque identifier that points to the next item in the collection.
       * @minLength 1
       */
      cursor?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestAuthBearerData;
  }
}
