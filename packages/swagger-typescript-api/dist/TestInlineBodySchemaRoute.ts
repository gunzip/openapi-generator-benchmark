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
  TestInlineBodySchemaData,
  TestInlineBodySchemaPayload,
} from "./data-contracts";

export namespace TestInlineBodySchema {
  /**
   * No description
   * @name TestInlineBodySchema
   * @request POST:/test-inline-body-schema
   * @secure
   * @response `201` `TestInlineBodySchemaData` Created
   */
  export namespace TestInlineBodySchema {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TestInlineBodySchemaPayload;
    export type RequestHeaders = {};
    export type ResponseBody = TestInlineBodySchemaData;
  }
}
