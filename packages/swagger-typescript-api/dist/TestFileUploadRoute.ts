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

import { TestFileUploadData, TestFileUploadPayload } from "./data-contracts";

export namespace TestFileUpload {
  /**
   * No description
   * @name TestFileUpload
   * @request POST:/test-file-upload
   * @secure
   * @response `200` `TestFileUploadData` File uploaded
   */
  export namespace TestFileUpload {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TestFileUploadPayload;
    export type RequestHeaders = {};
    export type ResponseBody = TestFileUploadData;
  }
}
