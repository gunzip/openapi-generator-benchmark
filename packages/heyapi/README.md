# heyapi

https://heyapi.vercel.app/

Generate TypeScript interfaces, REST clients, and JSON Schemas from OpenAPI specifications.

Forked from https://github.com/ferdikoomen/openapi-typescript-codegen

no extensible enum
no literal (enum)
additionalprop wrong schemas
responses are a union of TypeScript types that don't depend on status or content type
also takes only the first one as request
loose typing of requests (non-conforming values allowed)
doesn't return status codes in response types
