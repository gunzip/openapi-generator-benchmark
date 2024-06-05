/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Test API
 * Test API.
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod'

export const testAuthBearerQueryParams = zod.object({
  "qo": zod.string().optional(),
  "qr": zod.string(),
  "cursor": zod.string().min(1).optional()
})


export const testAuthBearerHttpQueryParams = zod.object({
  "qo": zod.string().optional(),
  "qr": zod.string(),
  "cursor": zod.string().min(1).optional()
})


export const testSimpleTokenQueryParams = zod.object({
  "qo": zod.string().optional(),
  "qr": zod.string(),
  "cursor": zod.string().min(1).optional()
})


export const testMultipleSuccessResponseContentSubjectMin = 10;

export const testMultipleSuccessResponseContentSubjectMax = 120;
export const testMultipleSuccessResponseContentMarkdownMin = 80;

export const testMultipleSuccessResponseContentMarkdownMax = 10000;


export const testMultipleSuccessResponse = zod.object({
  "id": zod.string(),
  "content": zod.object({
  "subject": zod.string().min(testMultipleSuccessResponseContentSubjectMin).max(testMultipleSuccessResponseContentSubjectMax).optional(),
  "markdown": zod.string().min(testMultipleSuccessResponseContentMarkdownMin).max(testMultipleSuccessResponseContentMarkdownMax)
}),
  "sender_service_id": zod.string().optional()
})


export const testParameterWithReferenceQueryParams = zod.object({
  "request-id": zod.string().optional()
})


export const testParameterWithBodyReferenceBody = zod.object({
  "id": zod.string(),
  "name": zod.string()
})


export const putTestParameterWithBodyReferenceBody = zod.object({
  "id": zod.string(),
  "name": zod.string()
})


export const testParameterWithDashParams = zod.object({
  "path-param": zod.string()
})

export const testParameterWithDashQueryParams = zod.object({
  "foo-bar": zod.string().optional(),
  "request-id": zod.string().optional()
})

export const testParameterWithDashHeader = zod.object({
  "headerInlineParam": zod.string(),
  "x-header-param": zod.string()
})


export const testParameterWithDashAnUnderscoreParams = zod.object({
  "path-param": zod.string()
})

export const testParameterWithDashAnUnderscoreQueryParams = zod.object({
  "foo_bar": zod.string().optional(),
  "request-id": zod.string().optional()
})

export const testParameterWithDashAnUnderscoreHeader = zod.object({
  "headerInlineParam": zod.string(),
  "x-header-param": zod.string()
})


export const testWithTwoParamsParams = zod.object({
  "first-param": zod.string(),
  "second-param": zod.string()
})


export const testParamWithSchemaRefParams = zod.object({
  "param": zod.string()
})


export const testHeaderWithSchemaRefHeader = zod.object({
  "param": zod.string()
})


export const testHeaderOptionalHeader = zod.object({
  "param": zod.string().optional()
})


export const testDatesResponseZipCodeRegExp = new RegExp('[0-9]+');


export const testDatesResponse = zod.object({
  "name": zod.string().optional(),
  "address": zod.any().optional(),
  "birth": zod.string().datetime().optional(),
  "death": zod.date().optional(),
  "age": zod.number().optional(),
  "zipCode": zod.string().regex(testDatesResponseZipCodeRegExp).optional()
})


