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
  TestBinaryFileUploadData,
  TestBinaryFileUploadPayload,
} from "./data-contracts";

export namespace TestBinaryFileUpload {
  /**
   * No description
   * @name TestBinaryFileUpload
   * @request POST:/test-binary-file-upload
   * @secure
   * @response `200` `TestBinaryFileUploadData` File uploaded
   */
  export namespace TestBinaryFileUpload {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TestBinaryFileUploadPayload;
    export type RequestHeaders = {};
    export type ResponseBody = TestBinaryFileUploadData;
  }
}
