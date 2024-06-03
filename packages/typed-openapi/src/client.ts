import z from "zod";

export type Person = z.infer<typeof Person>;
export const Person = z.object({
  name: z.string().optional(),
  address: z
    .object({
      location: z.string().optional(),
      city: z.string().optional(),
      zipCode: z.string().optional(),
    })
    .optional(),
  birth: z.string().optional(),
  death: z.string().optional(),
});

export type Book = z.infer<typeof Book>;
export const Book = z.object({
  title: z.string().optional(),
  author: z
    .object({
      isDead: z.boolean().optional(),
      info: Person.optional(),
    })
    .optional(),
});

export type FiscalCode = z.infer<typeof FiscalCode>;
export const FiscalCode = z.string();

export type EmailAddress = z.infer<typeof EmailAddress>;
export const EmailAddress = z.string();

export type IsInboxEnabled = z.infer<typeof IsInboxEnabled>;
export const IsInboxEnabled = z.boolean();

export type IsWebhookEnabled = z.infer<typeof IsWebhookEnabled>;
export const IsWebhookEnabled = z.boolean();

export type PreferredLanguage = z.infer<typeof PreferredLanguage>;
export const PreferredLanguage = z.string();

export type PreferredLanguages = z.infer<typeof PreferredLanguages>;
export const PreferredLanguages = z.array(PreferredLanguage);

export type Profile = z.infer<typeof Profile>;
export const Profile = z.object({
  email: z.union([EmailAddress, z.undefined()]).optional(),
  family_name: z.string(),
  fiscal_code: FiscalCode,
  has_profile: z.boolean(),
  is_email_set: z.boolean(),
  is_inbox_enabled: z.union([IsInboxEnabled, z.undefined()]).optional(),
  is_webhook_enabled: z.union([IsWebhookEnabled, z.undefined()]).optional(),
  name: z.string(),
  preferred_email: z.union([EmailAddress, z.undefined()]).optional(),
  preferred_languages: z.union([PreferredLanguages, z.undefined()]).optional(),
  version: z.number(),
  payload: z.union([z.object({}), z.undefined()]).optional(),
});

export type SimpleDefinition = z.infer<typeof SimpleDefinition>;
export const SimpleDefinition = z.object({
  id: z.string(),
});

export type DefinitionFieldWithDash = z.infer<typeof DefinitionFieldWithDash>;
export const DefinitionFieldWithDash = z.object({
  "id-field": z.string().optional(),
});

export type MessageSubject = z.infer<typeof MessageSubject>;
export const MessageSubject = z.string();

export type MessageBodyMarkdown = z.infer<typeof MessageBodyMarkdown>;
export const MessageBodyMarkdown = z.string();

export type MessageContent = z.infer<typeof MessageContent>;
export const MessageContent = z.object({
  subject: z.union([MessageSubject, z.undefined()]).optional(),
  markdown: MessageBodyMarkdown,
});

export type Message = z.infer<typeof Message>;
export const Message = z.object({
  id: z.string(),
  content: MessageContent,
  sender_service_id: z.union([z.string(), z.undefined()]).optional(),
});

export type NewModel = z.infer<typeof NewModel>;
export const NewModel = z.object({
  id: z.string(),
  name: z.string(),
});

export type PaginationResponse = z.infer<typeof PaginationResponse>;
export const PaginationResponse = z.object({
  page_size: z.number().optional(),
  next: z.string().optional(),
});

export type OneOfTest = z.infer<typeof OneOfTest>;
export const OneOfTest = z.union([
  z.object({
    limited: z.boolean().optional(),
  }),
  z.object({
    unlimited: z.boolean().optional(),
  }),
]);

export type AllOfWithOneElementTest = z.infer<typeof AllOfWithOneElementTest>;
export const AllOfWithOneElementTest = z.object({
  key: z.string().optional(),
});

export type AllOfWithOneRefElementTest = z.infer<
  typeof AllOfWithOneRefElementTest
>;
export const AllOfWithOneRefElementTest = z.object({
  email: z.union([EmailAddress, z.undefined()]).optional(),
  family_name: z.string(),
  fiscal_code: FiscalCode,
  has_profile: z.boolean(),
  is_email_set: z.boolean(),
  is_inbox_enabled: z.union([IsInboxEnabled, z.undefined()]).optional(),
  is_webhook_enabled: z.union([IsWebhookEnabled, z.undefined()]).optional(),
  name: z.string(),
  preferred_email: z.union([EmailAddress, z.undefined()]).optional(),
  preferred_languages: z.union([PreferredLanguages, z.undefined()]).optional(),
  version: z.number(),
  payload: z.union([z.object({}), z.undefined()]).optional(),
});

export type AllOfWithXExtensibleEnum = z.infer<typeof AllOfWithXExtensibleEnum>;
export const AllOfWithXExtensibleEnum = z.intersection(
  Profile,
  z.object({
    status: z.string(),
  })
);

export type AllOfTest = z.infer<typeof AllOfTest>;
export const AllOfTest = z.intersection(
  z.object({
    items: z.array(Message).optional(),
  }),
  PaginationResponse
);

export type AnObjectWithAnItemsField = z.infer<typeof AnObjectWithAnItemsField>;
export const AnObjectWithAnItemsField = z.object({
  items: z.array(DefinitionFieldWithDash),
});

export type AnObjectWithRefImport = z.infer<typeof AnObjectWithRefImport>;
export const AnObjectWithRefImport = z.object({
  prop1: SimpleDefinition,
});

export type WithinRangeStringTest = z.infer<typeof WithinRangeStringTest>;
export const WithinRangeStringTest = z.string();

export type NonNegativeNumberTest = z.infer<typeof NonNegativeNumberTest>;
export const NonNegativeNumberTest = z.number();

export type ConstantIntegerTest = z.infer<typeof ConstantIntegerTest>;
export const ConstantIntegerTest = z.literal("100");

export type NonNegativeIntegerTest = z.infer<typeof NonNegativeIntegerTest>;
export const NonNegativeIntegerTest = z.number();

export type WithinRangeIntegerTest = z.infer<typeof WithinRangeIntegerTest>;
export const WithinRangeIntegerTest = z.number();

export type WithinRangeNumberTest = z.infer<typeof WithinRangeNumberTest>;
export const WithinRangeNumberTest = z.number();

export type WithinRangeExclusiveMaximumIntegerTest = z.infer<
  typeof WithinRangeExclusiveMaximumIntegerTest
>;
export const WithinRangeExclusiveMaximumIntegerTest = z.number();

export type WithinRangeExclusiveMinimumIntegerTest = z.infer<
  typeof WithinRangeExclusiveMinimumIntegerTest
>;
export const WithinRangeExclusiveMinimumIntegerTest = z.number();

export type WithinRangeExclusiveMinimumNumberTest = z.infer<
  typeof WithinRangeExclusiveMinimumNumberTest
>;
export const WithinRangeExclusiveMinimumNumberTest = z.number();

export type WithinRangeExclusiveMinMaxIntegerTest = z.infer<
  typeof WithinRangeExclusiveMinMaxIntegerTest
>;
export const WithinRangeExclusiveMinMaxIntegerTest = z.number();

export type WithinRangeExclusiveMinMaxNumberTest = z.infer<
  typeof WithinRangeExclusiveMinMaxNumberTest
>;
export const WithinRangeExclusiveMinMaxNumberTest = z.number();

export type WithinRangeExclusiveMaximumNumberTest = z.infer<
  typeof WithinRangeExclusiveMaximumNumberTest
>;
export const WithinRangeExclusiveMaximumNumberTest = z.number();

export type CustomStringFormatTest = z.infer<typeof CustomStringFormatTest>;
export const CustomStringFormatTest = z.string();

export type EnumTest = z.infer<typeof EnumTest>;
export const EnumTest = z.object({
  status: z
    .union([z.literal("value1"), z.literal("value2"), z.literal("value3")])
    .optional(),
});

export type AdditionalPropsTest = z.infer<typeof AdditionalPropsTest>;
export const AdditionalPropsTest = z.unknown();

export type AdditionalPropsTrueTest = z.infer<typeof AdditionalPropsTrueTest>;
export const AdditionalPropsTrueTest = z.unknown();

export type AdditionalpropsDefault = z.infer<typeof AdditionalpropsDefault>;
export const AdditionalpropsDefault = z.unknown();

export type InlinePropertyTest = z.infer<typeof InlinePropertyTest>;
export const InlinePropertyTest = z.object({
  inlineProp: z.string().optional(),
});

export type NestedObjectTest = z.infer<typeof NestedObjectTest>;
export const NestedObjectTest = z.object({
  inlineProp: z.string().optional(),
  nestedObject: z
    .object({
      inlineProp: z.string().optional(),
    })
    .optional(),
});

export type OrganizationFiscalCode = z.infer<typeof OrganizationFiscalCode>;
export const OrganizationFiscalCode = z.string();

export type OrganizationFiscalCodeTest = z.infer<
  typeof OrganizationFiscalCodeTest
>;
export const OrganizationFiscalCodeTest = z.string();

export type ListOfDefinitions = z.infer<typeof ListOfDefinitions>;
export const ListOfDefinitions = z.array(
  z.object({
    field: z.string().optional(),
  })
);

export type ListOfReferences = z.infer<typeof ListOfReferences>;
export const ListOfReferences = z.array(DefinitionFieldWithDash);

export type EnabledUserTest = z.infer<typeof EnabledUserTest>;
export const EnabledUserTest = z.object({
  description: z.string(),
  enabled: z.literal("true"),
  username: z.string(),
});

export type DisabledUserTest = z.infer<typeof DisabledUserTest>;
export const DisabledUserTest = z.object({
  enabled: z.literal("false"),
  reason: z.string(),
  username: z.string(),
});

export type DisjointUnionsUserTest = z.infer<typeof DisjointUnionsUserTest>;
export const DisjointUnionsUserTest = z.union([
  EnabledUserTest,
  DisabledUserTest,
]);

export type EnumTrueTest = z.infer<typeof EnumTrueTest>;
export const EnumTrueTest = z.object({
  flag: z.literal("true").optional(),
});

export type EnumFalseTest = z.infer<typeof EnumFalseTest>;
export const EnumFalseTest = z.object({
  flag: z.literal("false").optional(),
});

export type ObjectDefinitionWithImplicitType = z.infer<
  typeof ObjectDefinitionWithImplicitType
>;
export const ObjectDefinitionWithImplicitType = z.object({
  prop_one: z.string().optional(),
  prop_two: z.string().optional(),
});

export type ObjectDefinitionWithImplicitTypeAndAdditionalProperties = z.infer<
  typeof ObjectDefinitionWithImplicitTypeAndAdditionalProperties
>;
export const ObjectDefinitionWithImplicitTypeAndAdditionalProperties =
  z.unknown();

export type get_TestAuthBearer = typeof get_TestAuthBearer;
export const get_TestAuthBearer = {
  method: z.literal("GET"),
  path: z.literal("/test-auth-bearer"),
  parameters: z.object({
    query: z.object({
      qo: z.union([z.string(), z.undefined()]),
      qr: z.string(),
      cursor: z.union([z.string(), z.undefined()]),
    }),
  }),
  response: z.unknown(),
};

export type get_TestAuthBearerHttp = typeof get_TestAuthBearerHttp;
export const get_TestAuthBearerHttp = {
  method: z.literal("GET"),
  path: z.literal("/test-auth-bearer-http"),
  parameters: z.object({
    query: z.object({
      qo: z.union([z.string(), z.undefined()]),
      qr: z.string(),
      cursor: z.union([z.string(), z.undefined()]),
    }),
  }),
  response: z.unknown(),
};

export type get_TestSimpleToken = typeof get_TestSimpleToken;
export const get_TestSimpleToken = {
  method: z.literal("GET"),
  path: z.literal("/test-simple-token"),
  parameters: z.object({
    query: z.object({
      qo: z.union([z.string(), z.undefined()]),
      qr: z.string(),
      cursor: z.union([z.string(), z.undefined()]),
    }),
  }),
  response: z.unknown(),
};

export type get_TestMultipleSuccess = typeof get_TestMultipleSuccess;
export const get_TestMultipleSuccess = {
  method: z.literal("GET"),
  path: z.literal("/test-multiple-success"),
  parameters: z.never(),
  response: z.unknown(),
};

export type post_TestFileUpload = typeof post_TestFileUpload;
export const post_TestFileUpload = {
  method: z.literal("POST"),
  path: z.literal("/test-file-upload"),
  parameters: z.object({
    body: z.object({
      file: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_TestBinaryFileUpload = typeof post_TestBinaryFileUpload;
export const post_TestBinaryFileUpload = {
  method: z.literal("POST"),
  path: z.literal("/test-binary-file-upload"),
  parameters: z.object({
    body: z.object({
      file: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestBinaryFileDownload = typeof get_TestBinaryFileDownload;
export const get_TestBinaryFileDownload = {
  method: z.literal("GET"),
  path: z.literal("/test-binary-file-download"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_TestResponseHeader = typeof get_TestResponseHeader;
export const get_TestResponseHeader = {
  method: z.literal("GET"),
  path: z.literal("/test-response-header"),
  parameters: z.never(),
  response: Message,
};

export type post_TestParameterWithReference =
  typeof post_TestParameterWithReference;
export const post_TestParameterWithReference = {
  method: z.literal("POST"),
  path: z.literal("/test-parameter-with-reference"),
  parameters: z.object({
    query: z.object({
      "request-id": z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_TestParameterWithBodyReference =
  typeof post_TestParameterWithBodyReference;
export const post_TestParameterWithBodyReference = {
  method: z.literal("POST"),
  path: z.literal("/test-parameter-with-body-ref"),
  parameters: z.object({
    body: NewModel,
  }),
  response: z.unknown(),
};

export type put_PutTestParameterWithBodyReference =
  typeof put_PutTestParameterWithBodyReference;
export const put_PutTestParameterWithBodyReference = {
  method: z.literal("PUT"),
  path: z.literal("/put-test-parameter-with-body-ref"),
  parameters: z.object({
    body: NewModel,
  }),
  response: z.unknown(),
};

export type get_TestParameterWithDash = typeof get_TestParameterWithDash;
export const get_TestParameterWithDash = {
  method: z.literal("GET"),
  path: z.literal("/test-parameter-with-dash/{path-param}"),
  parameters: z.object({
    query: z.object({
      "foo-bar": z.string().optional(),
      "request-id": z.string().optional(),
    }),
    path: z.object({
      "path-param": z.string(),
    }),
    header: z.object({
      headerInlineParam: z.string(),
      "x-header-param": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestParameterWithDashAnUnderscore =
  typeof get_TestParameterWithDashAnUnderscore;
export const get_TestParameterWithDashAnUnderscore = {
  method: z.literal("GET"),
  path: z.literal("/test-parameter-with-dash-and_underscore/{path-param}"),
  parameters: z.object({
    query: z.object({
      foo_bar: z.string().optional(),
      "request-id": z.string().optional(),
    }),
    path: z.object({
      "path-param": z.string(),
    }),
    header: z.object({
      headerInlineParam: z.string(),
      "x-header-param": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestWithTwoParams = typeof get_TestWithTwoParams;
export const get_TestWithTwoParams = {
  method: z.literal("GET"),
  path: z.literal("/test-two-path-params/{first-param}/{second-param}"),
  parameters: z.object({
    path: z.object({
      "first-param": z.string(),
      "second-param": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestParametersAtPathLevel =
  typeof get_TestParametersAtPathLevel;
export const get_TestParametersAtPathLevel = {
  method: z.literal("GET"),
  path: z.literal("/test-path-level-parameter"),
  parameters: z.object({
    query: z.object({
      "request-id": z.string(),
      cursor: z.union([z.string(), z.undefined()]),
    }),
  }),
  response: z.unknown(),
};

export type patch_TestSimplePatch = typeof patch_TestSimplePatch;
export const patch_TestSimplePatch = {
  method: z.literal("PATCH"),
  path: z.literal("/test-simple"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_TestCustomTokenHeader = typeof get_TestCustomTokenHeader;
export const get_TestCustomTokenHeader = {
  method: z.literal("GET"),
  path: z.literal("/test-custom-token-header"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_TestWithEmptyResponse = typeof get_TestWithEmptyResponse;
export const get_TestWithEmptyResponse = {
  method: z.literal("GET"),
  path: z.literal("/test-with-empty-response"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_TestParamWithSchemaRef = typeof get_TestParamWithSchemaRef;
export const get_TestParamWithSchemaRef = {
  method: z.literal("GET"),
  path: z.literal("/test-param-with-schema-ref/{param}"),
  parameters: z.object({
    path: z.object({
      param: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestHeaderWithSchemaRef = typeof get_TestHeaderWithSchemaRef;
export const get_TestHeaderWithSchemaRef = {
  method: z.literal("GET"),
  path: z.literal("/test-header-with-schema-ref"),
  parameters: z.object({
    header: z.object({
      param: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestHeaderOptional = typeof get_TestHeaderOptional;
export const get_TestHeaderOptional = {
  method: z.literal("GET"),
  path: z.literal("/test-header-optional"),
  parameters: z.object({
    header: z.object({
      param: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type get_TestDates = typeof get_TestDates;
export const get_TestDates = {
  method: z.literal("GET"),
  path: z.literal("/test-dates"),
  parameters: z.never(),
  response: Person,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/test-auth-bearer": get_TestAuthBearer,
    "/test-auth-bearer-http": get_TestAuthBearerHttp,
    "/test-simple-token": get_TestSimpleToken,
    "/test-multiple-success": get_TestMultipleSuccess,
    "/test-binary-file-download": get_TestBinaryFileDownload,
    "/test-response-header": get_TestResponseHeader,
    "/test-parameter-with-dash/{path-param}": get_TestParameterWithDash,
    "/test-parameter-with-dash-and_underscore/{path-param}":
      get_TestParameterWithDashAnUnderscore,
    "/test-two-path-params/{first-param}/{second-param}": get_TestWithTwoParams,
    "/test-path-level-parameter": get_TestParametersAtPathLevel,
    "/test-custom-token-header": get_TestCustomTokenHeader,
    "/test-with-empty-response": get_TestWithEmptyResponse,
    "/test-param-with-schema-ref/{param}": get_TestParamWithSchemaRef,
    "/test-header-with-schema-ref": get_TestHeaderWithSchemaRef,
    "/test-header-optional": get_TestHeaderOptional,
    "/test-dates": get_TestDates,
  },
  post: {
    "/test-file-upload": post_TestFileUpload,
    "/test-binary-file-upload": post_TestBinaryFileUpload,
    "/test-parameter-with-reference": post_TestParameterWithReference,
    "/test-parameter-with-body-ref": post_TestParameterWithBodyReference,
  },
  put: {
    "/put-test-parameter-with-body-ref": put_PutTestParameterWithBodyReference,
  },
  patch: {
    "/test-simple": patch_TestSimplePatch,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type PutEndpoints = EndpointByMethod["put"];
export type PatchEndpoints = EndpointByMethod["patch"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never
  ? [config?: T]
  : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint["response"]>
    >;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint["response"]>
    >;
  }
  // </ApiClient.post>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint["response"]>
    >;
  }
  // </ApiClient.put>

  // <ApiClient.patch>
  patch<
    Path extends keyof PatchEndpoints,
    TEndpoint extends PatchEndpoints[Path]
  >(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("patch", this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint["response"]>
    >;
  }
  // </ApiClient.patch>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
