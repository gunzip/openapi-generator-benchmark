/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Test API
 * Test API.
 * OpenAPI spec version: 1.0.0
 */
import type { RequiredRequestIdParameter } from './requiredRequestIdParameter';
import type { PaginationRequestParameter } from './paginationRequestParameter';

export type TestParametersAtPathLevelParams = {
'request-id': RequiredRequestIdParameter;
/**
 * An opaque identifier that points to the next item in the collection.
 */
cursor?: PaginationRequestParameter;
};
