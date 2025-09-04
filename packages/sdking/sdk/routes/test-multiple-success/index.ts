import { z } from "zod";
import { type NewModel, NewModelSchema, type AnotherModel, AnotherModelSchema, type Blob, BlobSchema } from "../../schemas/index.js";
import { sdkConfig } from "../../config.js";


/**
 * POST /test-multiple-success
 * 
 * OperationId: testMultipleSuccess
 */
export async function post(body: NewModel, headers?: Record<string, string>): Promise<NewModel> {
  // Construct the URL with path parameters
  let url = `${sdkConfig.baseUrl}/test-multiple-success`;

  // Prepare fetch options
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...sdkConfig.headers,
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  // Make the request
  const response = await fetch(url, options);

  // Handle the response
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  }

  // Parse the response
  const data = await response.json();
  return NewModelSchema.parse(data);
}

export const routes = {

  post,
};
