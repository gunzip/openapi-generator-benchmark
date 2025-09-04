import { buildOpenAPIClient } from 'massimo'
import { join } from 'node:path'

export async function generateMyclientClient (opts) {
  return buildOpenAPIClient({
    type: 'openapi',
    name: 'myclient',
    path: join(import.meta.dirname, 'myclient.openapi.json'),
    url: opts.url,
    serviceId: opts.serviceId,
    throwOnError: opts.throwOnError,
    fullResponse: true,
    fullRequest: true,
    validateResponse: true,
    getHeaders: opts.getHeaders
  })
}

export default generateMyclientClient
