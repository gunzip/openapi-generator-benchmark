# typed-openapi

https://github.com/astahmer/typed-openapi

> Generate a Typescript API client from an OpenAPI spec.
> Headless API client, bring your own fetcher ! (fetch, axios, ky, etc...)

> Non goals
> Caring too much about the runtime validation code. If that works (thanks to typebox-codegen),
> that's great, otherwise I'm not really interested in fixing it. If you are, feel free to open a PR.

## GitHub star

150

## Last commit

Last week.

## Works on our specs

Yes.

## Generate server types

## Has runtime checks

Yes, with Typebox (zod, io-ts, etc...).

## Code quality and extensibility

## Footprint

All types in one file.

## Dependencies

Typebox.

## Supports

- pattern: no

- enum: yes

- max/min: no

- allof: yes

- oneof: yes

- dates: no

- binary: no

- securityDefinitions: no

## Conclusion

typed-openapi converts OpenAPI specs into Typescript types then
TypeBox-Codegen converts these TypeScript types into TypeBox types.

The conversion is loosy and doesn't support all OpenAPI features
(pattern, date, min/max, etc...).

We cannot consider this library as a complete solution for our needs.
