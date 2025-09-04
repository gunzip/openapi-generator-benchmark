/**
 * SDK Configuration
 * Generated from Test API v1.0.0
 */

/**
 * SDK Configuration interface
 */
export interface SDKConfig {
  /**
   * Base URL for API requests
   * Can be overridden per-request by the user
   */
  baseUrl: string;
  
  /**
   * Default headers sent with each request
   */
  headers: Record<string, string>;
}

/**
 * Default SDK configuration
 * This can be modified by the user after importing the SDK
 */
export const sdkConfig: SDKConfig = {
  /**
   * Default API server from OpenAPI spec: https://localhost/api/v1
   * Change this to your API server URL
   */
  baseUrl: 'https://localhost/api/v1',
  
  /**
   * Default headers sent with each request
   */
  headers: {
    'Accept': 'application/json',
  },
};
