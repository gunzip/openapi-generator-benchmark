# openapi-zod-client

> Generates a zodios (typescript http client with zod validation) from a (json/yaml) OpenAPI spec (or just use the generated schemas/endpoints/etc !)

## GitHub star

646

## Last commit

2 months ago

## Works on our specs

Yes

## Generate server types

Yes

## Has runtime checks

Yes

## Code quality and extensibility

Overall decent, customizable through templates.

## Footprint

One big object needs to be passed to the zodios instance.

## Dependencies

## Supports

- pattern: yes

- enum: yes

- max/min: yes

- allof: yes

- oneof: yes

- dates: yes

- binary: yes

- securityDefinitions: no

## Conclusion

- does not support multiple success, only 200
- does not support security keys and bearer token
- does not support binary file download
- for some odd reason min/max are valued only when the field is included into a parent type
  (this is a showstopper)
