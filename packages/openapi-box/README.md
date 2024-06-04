# openapi-box

> Generate TypeBox types from OpenApi V3 IDL + End-to-end typesafe HTTP client library.

## GitHub star

13

## Last commit

2 weeks ago.

## Works on our specs

Not out of the box:

```typescript
cache['1bc46bb0509a3d01e287c25b666e9879'] = {
> 167 |   id-field: T.Optional(T.String()),
      |     ^
  168 | }
```

## Generate server types

No, it's not Typescript.

## Has runtime checks

Yes, it uses TypeBox.

## Code quality and extensibility

Simple and good.

## Footprint

Small!

## Dependencies

TypeBox.

## Supports

- pattern:

- enum: yes

- max/min: no

- allof: yes

- oneof: yes

- dates: yes

- binary: no

- securityDefinitions: no

## Conclusion

Overall, in principle, it's a good idea to generate types using Typebox,
but it's not ready for production yet.

The codebase is very simple and we can take inspiration from it.
