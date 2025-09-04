import { type GetHeadersOptions, type PlatformaticClientOptions, type StatusCode1xx, type StatusCode2xx, type StatusCode3xx, type StatusCode4xx, type StatusCode5xx } from 'massimo'
import { type FormData } from 'undici'

export type Myclient = {
  /**
   * @param req - request parameters object
   * @returns the API response
   */
  testMultipleSuccess(req: TestMultipleSuccessRequest): Promise<TestMultipleSuccessResponses>;
}
export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': Record<string, string>;
  'body': T;
}

export type TestMultipleSuccessRequest = {
  body: {
    'id': string;
    'name'?: string;
  }
}

/**
 * Will return a Message
 */
export type TestMultipleSuccessResponseOK = { 'id': string; 'name'?: string }
export type TestMultipleSuccessResponseCreated = unknown
/**
 * You do not have necessary permissions for the resource
 */
export type TestMultipleSuccessResponseForbidden = { 'id'?: string }
export type TestMultipleSuccessResponseNotFound = unknown
export type TestMultipleSuccessResponses =
  FullResponse<TestMultipleSuccessResponseOK, 200>
  | FullResponse<TestMultipleSuccessResponseCreated, 201>
  | FullResponse<TestMultipleSuccessResponseForbidden, 403>
  | FullResponse<TestMultipleSuccessResponseNotFound, 404>


export function generateMyclientClient(opts: PlatformaticClientOptions): Promise<Myclient>;
export default generateMyclientClient;
