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

import { TestAuthBearerHttpData } from "./data-contracts";

export namespace TestAuthBearerHttp {
  /**
 * No description
 * @name TestAuthBearerHttp
 * @request GET:/test-auth-bearer-http
 * @secure
 * @response `200` `TestAuthBearerHttpData` Will send `Authenticated`
 * @response `403` `void` You do not have necessary permissions for the resource
 * @response `503` `{
    "prop1": SimpleDefinition,
    "prop2"?: string,

}` Another failure.
 * @response `504` `ProblemDetails` Failure.
*/
  export namespace TestAuthBearerHttp {
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
    export type ResponseBody = TestAuthBearerHttpData;
  }
}
