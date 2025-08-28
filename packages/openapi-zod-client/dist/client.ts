import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const Person = z
  .object({
    name: z.string(),
    address: z
      .object({
        location: z.string(),
        city: z.string(),
        zipCode: z.string().regex(/^\d{5}$/),
      })
      .partial()
      .passthrough(),
    birth: z.string().datetime({ offset: true }),
    death: z.string(),
    age: z.union([z.literal(20), z.literal(40), z.literal(50)]),
    zipCode: z.string().regex(/[0-9]+/),
  })
  .partial()
  .passthrough();
const SimpleDefinition = z.object({ id: z.string() }).passthrough();
const MessageSubject = z.string();
const MessageBodyMarkdown = z.string();
const MessageContent = z
  .object({
    subject: MessageSubject.min(10).max(120).optional(),
    markdown: MessageBodyMarkdown.min(80).max(10000),
  })
  .passthrough();
const Message = z
  .object({
    id: z.string(),
    content: MessageContent,
    sender_service_id: z.string().optional(),
  })
  .passthrough();
const OneOfTest = z.union([
  z.object({ limited: z.boolean() }).partial().passthrough(),
  z.object({ unlimited: z.boolean() }).partial().passthrough(),
]);
const testInlineBodySchema_Body = z
  .object({ name: z.string(), age: z.number().optional() })
  .passthrough();
const NewModel = z.object({ id: z.string(), name: z.string() }).passthrough();
const Book = z
  .object({
    title: z.string(),
    author: z
      .object({ isDead: z.boolean(), info: Person })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const TestDeserUser = z
  .object({ name: z.string(), age: z.number().int() })
  .passthrough();
const FiscalCode = z.string();
const EmailAddress = z.string();
const IsInboxEnabled = z.boolean();
const IsWebhookEnabled = z.boolean();
const PreferredLanguage = z.string();
const PreferredLanguages = z.array(PreferredLanguage);
const Profile = z
  .object({
    email: EmailAddress.email().optional(),
    family_name: z.string(),
    fiscal_code: FiscalCode.regex(
      /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$/
    ),
    has_profile: z.boolean(),
    is_email_set: z.boolean(),
    is_inbox_enabled: IsInboxEnabled.optional().default(false),
    is_webhook_enabled: IsWebhookEnabled.optional().default(false),
    name: z.string(),
    preferred_email: EmailAddress.email().optional(),
    preferred_languages: PreferredLanguages.optional(),
    version: z.number().int(),
    payload: z.object({}).partial().passthrough().optional(),
  })
  .passthrough();
const DefinitionFieldWithDash = z
  .object({ "id-field": z.string() })
  .partial()
  .passthrough();
const PaginationResponse = z
  .object({ page_size: z.number().int().gte(1), next: z.string().url() })
  .partial()
  .passthrough();
const AllOfWithOneElementTest = z
  .object({ key: z.string() })
  .partial()
  .passthrough();
const AllOfWithOneRefElementTest = Profile;
const AllOfWithXExtensibleEnum = Profile.and(
  z.object({ status: z.string() }).passthrough()
);
const AllOfTest = z
  .object({ items: z.array(Message) })
  .partial()
  .passthrough()
  .and(PaginationResponse);
const AnObjectWithAnItemsField = z
  .object({ items: z.array(DefinitionFieldWithDash) })
  .passthrough();
const AnObjectWithRefImport = z
  .object({ prop1: SimpleDefinition })
  .passthrough();
const WithinRangeStringTest = z.string();
const NonNegativeNumberTest = z.number();
const ConstantIntegerTest = z.literal(100);
const NonNegativeIntegerTest = z.number();
const WithinRangeIntegerTest = z.number();
const WithinRangeNumberTest = z.number();
const WithinRangeExclusiveMaximumIntegerTest = z.number();
const WithinRangeExclusiveMinimumIntegerTest = z.number();
const WithinRangeExclusiveMinimumNumberTest = z.number();
const WithinRangeExclusiveMinMaxIntegerTest = z.number();
const WithinRangeExclusiveMinMaxNumberTest = z.number();
const WithinRangeExclusiveMaximumNumberTest = z.number();
const CustomStringFormatTest = z.string();
const EnumTest = z
  .object({ status: z.enum(["value1", "value2", "value3"]) })
  .partial()
  .passthrough();
const AdditionalPropsTest = z.record(z.array(z.number()));
const AdditionalPropsTrueTest = z.object({}).partial().passthrough();
const AdditionalpropsDefault = z.record(z.array(z.number()));
const InlinePropertyTest = z
  .object({
    inlineProp: z
      .string()
      .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
  })
  .partial()
  .passthrough();
const NestedObjectTest = z
  .object({
    inlineProp: z
      .string()
      .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
    nestedObject: z
      .object({
        inlineProp: z
          .string()
          .regex(
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
          ),
      })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const OrganizationFiscalCode = z.string();
const OrganizationFiscalCodeTest = z.string();
const ListOfDefinitions = z.array(
  z.object({ field: z.string() }).partial().passthrough()
);
const ListOfReferences = z.array(DefinitionFieldWithDash);
const EnabledUserTest = z
  .object({
    description: z.string(),
    enabled: z.literal(true),
    username: z.string(),
  })
  .passthrough();
const DisabledUserTest = z
  .object({
    enabled: z.literal(false),
    reason: z.string(),
    username: z.string(),
  })
  .passthrough();
const DisjointUnionsUserTest = z.union([EnabledUserTest, DisabledUserTest]);
const EnumTrueTest = z
  .object({ flag: z.literal(true) })
  .partial()
  .passthrough();
const EnumFalseTest = z
  .object({ flag: z.literal(false) })
  .partial()
  .passthrough();
const ObjectDefinitionWithImplicitType = z
  .object({ prop_one: z.string(), prop_two: z.string() })
  .partial()
  .passthrough();
const ObjectDefinitionWithImplicitTypeAndAdditionalProperties = z.record(
  z.array(z.number())
);
const ProblemDetails = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
  })
  .partial()
  .passthrough();

export const schemas = {
  Person,
  SimpleDefinition,
  MessageSubject,
  MessageBodyMarkdown,
  MessageContent,
  Message,
  OneOfTest,
  testInlineBodySchema_Body,
  NewModel,
  Book,
  TestDeserUser,
  FiscalCode,
  EmailAddress,
  IsInboxEnabled,
  IsWebhookEnabled,
  PreferredLanguage,
  PreferredLanguages,
  Profile,
  DefinitionFieldWithDash,
  PaginationResponse,
  AllOfWithOneElementTest,
  AllOfWithOneRefElementTest,
  AllOfWithXExtensibleEnum,
  AllOfTest,
  AnObjectWithAnItemsField,
  AnObjectWithRefImport,
  WithinRangeStringTest,
  NonNegativeNumberTest,
  ConstantIntegerTest,
  NonNegativeIntegerTest,
  WithinRangeIntegerTest,
  WithinRangeNumberTest,
  WithinRangeExclusiveMaximumIntegerTest,
  WithinRangeExclusiveMinimumIntegerTest,
  WithinRangeExclusiveMinimumNumberTest,
  WithinRangeExclusiveMinMaxIntegerTest,
  WithinRangeExclusiveMinMaxNumberTest,
  WithinRangeExclusiveMaximumNumberTest,
  CustomStringFormatTest,
  EnumTest,
  AdditionalPropsTest,
  AdditionalPropsTrueTest,
  AdditionalpropsDefault,
  InlinePropertyTest,
  NestedObjectTest,
  OrganizationFiscalCode,
  OrganizationFiscalCodeTest,
  ListOfDefinitions,
  ListOfReferences,
  EnabledUserTest,
  DisabledUserTest,
  DisjointUnionsUserTest,
  EnumTrueTest,
  EnumFalseTest,
  ObjectDefinitionWithImplicitType,
  ObjectDefinitionWithImplicitTypeAndAdditionalProperties,
  ProblemDetails,
};

const endpoints = makeApi([
  {
    method: "put",
    path: "/put-test-parameter-with-body-ref",
    alias: "putTestParameterWithBodyReference",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: NewModel,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-auth-bearer",
    alias: "testAuthBearer",
    requestFormat: "json",
    parameters: [
      {
        name: "qo",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "qr",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "cursor",
        type: "Query",
        schema: z.string().min(1).optional(),
      },
    ],
    response: Person,
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-auth-bearer-http",
    alias: "testAuthBearerHttp",
    requestFormat: "json",
    parameters: [
      {
        name: "qo",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "qr",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "cursor",
        type: "Query",
        schema: z.string().min(1).optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Another failure.`,
        schema: z
          .object({ prop1: SimpleDefinition, prop2: z.string().optional() })
          .passthrough(),
      },
      {
        status: 504,
        description: `Failure.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-binary-file-download",
    alias: "testBinaryFileDownload",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "post",
    path: "/test-binary-file-upload",
    alias: "testBinaryFileUpload",
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ file: z.instanceof(File) })
          .partial()
          .passthrough(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/test-custom-token-header",
    alias: "testCustomTokenHeader",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-deserialization",
    alias: "testDeserialization",
    requestFormat: "json",
    response: TestDeserUser,
  },
  {
    method: "post",
    path: "/test-file-upload",
    alias: "testFileUpload",
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ file: z.instanceof(File) })
          .partial()
          .passthrough(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/test-header-optional",
    alias: "testHeaderOptional",
    requestFormat: "json",
    parameters: [
      {
        name: "param",
        type: "Header",
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/test-header-with-schema-ref",
    alias: "testHeaderWithSchemaRef",
    requestFormat: "json",
    parameters: [
      {
        name: "param",
        type: "Header",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: "post",
    path: "/test-inline-body-schema",
    alias: "testInlineBodySchema",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: testInlineBodySchema_Body,
      },
    ],
    response: z.void(),
  },
  {
    method: "post",
    path: "/test-multi-content-types",
    alias: "testMultiContentTypes",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: NewModel,
      },
    ],
    response: NewModel,
  },
  {
    method: "get",
    path: "/test-multiple-success",
    alias: "testMultipleSuccess",
    requestFormat: "json",
    response: Message,
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: OneOfTest,
      },
      {
        status: 404,
        description: `Not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-param-with-schema-ref/:param",
    alias: "testParamWithSchemaRef",
    requestFormat: "json",
    parameters: [
      {
        name: "param",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: "post",
    path: "/test-parameter-with-body-ref",
    alias: "testParameterWithBodyReference",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: NewModel,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-parameter-with-dash-and_underscore/:pathParam",
    alias: "testParameterWithDashAnUnderscore",
    requestFormat: "json",
    parameters: [
      {
        name: "pathParam",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "foo_bar",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "headerInlineParam",
        type: "Header",
        schema: z.string(),
      },
      {
        name: "request-id",
        type: "Query",
        schema: z.string().min(10).optional(),
      },
      {
        name: "x-header-param",
        type: "Header",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-parameter-with-dash/:pathParam",
    alias: "testParameterWithDash",
    requestFormat: "json",
    parameters: [
      {
        name: "pathParam",
        type: "Path",
        schema: z.string().min(5),
      },
      {
        name: "foo-bar",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "headerInlineParam",
        type: "Header",
        schema: z.string(),
      },
      {
        name: "request-id",
        type: "Query",
        schema: z.string().min(10).optional(),
      },
      {
        name: "x-header-param",
        type: "Header",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/test-parameter-with-reference",
    alias: "testParameterWithReference",
    requestFormat: "json",
    parameters: [
      {
        name: "request-id",
        type: "Query",
        schema: z.string().min(10).optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-path-level-parameter",
    alias: "testParametersAtPathLevel",
    description: `when we declare parameters at path level`,
    requestFormat: "json",
    parameters: [
      {
        name: "request-id",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "cursor",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-response-header",
    alias: "testResponseHeader",
    requestFormat: "json",
    response: Message,
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/test-simple",
    alias: "testSimplePatch",
    description: `simply test of patch endpoint are considered`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-simple-token",
    alias: "testSimpleToken",
    requestFormat: "json",
    parameters: [
      {
        name: "qo",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "qr",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "cursor",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-two-path-params/:firstParam/:secondParam",
    alias: "testWithTwoParams",
    requestFormat: "json",
    parameters: [
      {
        name: "firstParam",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "secondParam",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 500,
        description: `Fatal error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/test-with-empty-response",
    alias: "testWithEmptyResponse",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/test-with-overridden-security",
    alias: "testOverriddenSecurity",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/test-with-overridden-security-no-auth",
    alias: "testOverriddenSecurityNoAuth",
    requestFormat: "json",
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
