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
  NewModel,
  PutTestParameterWithBodyReferenceData,
} from "./data-contracts";

export namespace PutTestParameterWithBodyRef {
  /**
   * No description
   * @name PutTestParameterWithBodyReference
   * @request PUT:/put-test-parameter-with-body-ref
   * @secure
   * @response `201` `PutTestParameterWithBodyReferenceData` Created
   * @response `500` `void` Fatal error
   */
  export namespace PutTestParameterWithBodyReference {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewModel;
    export type RequestHeaders = {};
    export type ResponseBody = PutTestParameterWithBodyReferenceData;
  }
}
