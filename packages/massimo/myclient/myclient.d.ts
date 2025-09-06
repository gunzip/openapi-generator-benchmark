import { type GetHeadersOptions, type PlatformaticClientOptions, type StatusCode1xx, type StatusCode2xx, type StatusCode3xx, type StatusCode4xx, type StatusCode5xx } from 'massimo'
import { type FormData } from 'undici'

export type Myclient = {
  /**
   * Get pet by ID
   * @param req - request parameters object
   * @returns the API response
   */
  getPetPetId(req: GetPetPetIdRequest): Promise<GetPetPetIdResponses>;
}
export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': Record<string, string>;
  'body': T;
}

export type GetPetPetIdRequest = {
  path: {
    'petId': string;
  }
}

/**
 * Success
 */
export type GetPetPetIdResponseOK = { 'id'?: string; 'name'?: string }
export type GetPetPetIdResponseNotFound = unknown
export type GetPetPetIddefaultResponse = unknown
export type GetPetPetIdResponses =
  FullResponse<GetPetPetIdResponseOK, 200>
  | FullResponse<GetPetPetIdResponseNotFound, 404>
  | FullResponse<GetPetPetIddefaultResponse, default>


export function generateMyclientClient(opts: PlatformaticClientOptions): Promise<Myclient>;
export default generateMyclientClient;
