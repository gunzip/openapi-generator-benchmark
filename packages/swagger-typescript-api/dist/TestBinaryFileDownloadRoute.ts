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

import { TestBinaryFileDownloadData } from "./data-contracts";

export namespace TestBinaryFileDownload {
  /**
   * No description
   * @name TestBinaryFileDownload
   * @request GET:/test-binary-file-download
   * @secure
   * @response `200` `TestBinaryFileDownloadData` Binary file download
   */
  export namespace TestBinaryFileDownload {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestBinaryFileDownloadData;
  }
}
