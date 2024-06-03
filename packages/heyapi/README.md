# heyapi

https://heyapi.vercel.app/

Generate TypeScript interfaces, REST clients, and JSON Schemas from OpenAPI specifications.

Forked from https://github.com/ferdikoomen/openapi-typescript-codegen

## GitHub star

445

## Last commit

5 days ago

## Works on our specs

Yes

## Generate server types

Yes.

## Has runtime checks

Not yet. See https://github.com/hey-api/openapi-ts/issues/591

## Code quality and extensibility

Clients are configurable. See https://heyapi.vercel.app/openapi-ts/clients.html#fetch-api

## Footprint

Very light. The generated code is very small.

## Dependencies

## Supports

- pattern: no

- enum: yes

- allof: yes

- oneof: yes

- dates: no

- binary: yes

- securityDefinitions: Ignored. But is it possible to pass a bearer token in the request within static configuration.
  see also https://heyapi.vercel.app/openapi-ts/clients.html#interceptors

## Conclusion

We cannot consider this atm if we want runtime checks and date / pattern supports.
