// Auto-generated by https://github.com/vladkens/apigen-ts
// Source: ../../openapi/api.yaml


export interface ApigenConfig {
  baseUrl: string
  headers: Record<string, string>
}

export interface ApigenRequest extends Omit<RequestInit, "body"> {
  search?: Record<string, unknown>
  body?: unknown
}

export class ApiClient {
  Config: ApigenConfig

  constructor(config?: Partial<ApigenConfig>) {
    this.Config = { baseUrl: "/", headers: {}, ...config }
  }

  

  async ParseError(rep: Response) {
    try {
      return await rep.json()
    } catch (e) {
      throw rep
    }
  }

  async Fetch<T>(method: string, path: string, opts: ApigenRequest = {}): Promise<T> {
    let base = this.Config.baseUrl
    if ("location" in globalThis && (base === "" || base.startsWith("/"))) {
      const { location } = globalThis as unknown as { location: { origin: string } }
      base = `${location.origin}${base.endsWith("/") ? base : `/${base}`}`
    }

    const url = new URL(path, base)
    for (const [k, v] of Object.entries(opts?.search ?? {})) {
      url.searchParams.append(k, Array.isArray(v) ? v.join(",") : (v as string))
    }

    const headers = new Headers({ ...this.Config.headers, ...opts.headers })
    const ct = headers.get("content-type") ?? "application/json"

    let body: FormData | URLSearchParams | string | undefined = undefined

    if (ct === "multipart/form-data" || ct === "application/x-www-form-urlencoded") {
      headers.delete("content-type")
      body = ct === "multipart/form-data" ? new FormData() : new URLSearchParams()
      for (const [k, v] of Object.entries(opts.body as Record<string, string>)) {
        body.append(k, v)
      }
    }

    if (ct === "application/json" && typeof opts.body !== "string") {
      headers.set("content-type", "application/json")
      body = JSON.stringify(opts.body)
    }

    const credentials = opts.credentials ?? "include"
    const rep = await fetch(url.toString(), { method, ...opts, headers, body, credentials })
    if (!rep.ok) throw await this.ParseError(rep)

    const rs = await rep.text()
    try {
      return JSON.parse(rs) as T
    } catch (e) {
      return rs as unknown as T
    }
  }

  general = { testAuthBearer: (search: {
        "qo"?: string;
        "qr"?: string;
        "cursor"?: string;
    }) => { return this.Fetch<void>("get", "/test-auth-bearer", { search }); },

testAuthBearerHttp: (search: {
        "qo"?: string;
        "qr"?: string;
        "cursor"?: string;
    }) => { return this.Fetch<void>("get", "/test-auth-bearer-http", { search }); },

testSimpleToken: (search: {
        "qo"?: string;
        "qr"?: string;
        "cursor"?: string;
    }) => { return this.Fetch<void>("get", "/test-simple-token", { search }); },

testMultipleSuccess: () => { return this.Fetch<Message>("get", "/test-multiple-success", {}); },

testFileUpload: (body: {
        "file"?: File;
    }) => { return this.Fetch<void>("post", "/test-file-upload", { body, headers: { "content-type": "multipart/form-data" } }); },

testBinaryFileUpload: (body: {
        "file"?: File;
    }) => { return this.Fetch<void>("post", "/test-binary-file-upload", { body, headers: { "content-type": "multipart/form-data" } }); },

testBinaryFileDownload: () => { return this.Fetch<void>("get", "/test-binary-file-download", {}); },

testResponseHeader: () => { return this.Fetch<Message>("get", "/test-response-header", {}); },

testParameterWithReference: (search: {
        "request-id"?: string;
    }) => { return this.Fetch<void>("post", "/test-parameter-with-reference", { search }); },

testParameterWithBodyReference: (body: NewModel) => { return this.Fetch<void>("post", "/test-parameter-with-body-ref", { body }); },

putTestParameterWithBodyReference: (body: NewModel) => { return this.Fetch<void>("put", "/put-test-parameter-with-body-ref", { body }); },

testParameterWithDash: (path_param: string, search: {
        "foo-bar"?: string;
        "request-id"?: string;
    }) => { return this.Fetch<void>("get", `/test-parameter-with-dash/${path_param}`, { search }); },

testParameterWithDashAnUnderscore: (path_param: string, search: {
        "foo_bar"?: string;
        "request-id"?: string;
    }) => { return this.Fetch<void>("get", `/test-parameter-with-dash-and_underscore/${path_param}`, { search }); },

testWithTwoParams: (first_param: string, second_param: string) => { return this.Fetch<void>("get", `/test-two-path-params/${first_param}/${second_param}`, {}); },

testParametersAtPathLevel: (search: {
        "request-id"?: string;
        "cursor"?: string;
    }) => { return this.Fetch<void>("get", "/test-path-level-parameter", { search }); },

testSimplePatch: () => { return this.Fetch<void>("patch", "/test-simple", {}); },

testCustomTokenHeader: () => { return this.Fetch<void>("get", "/test-custom-token-header", {}); },

testWithEmptyResponse: () => { return this.Fetch<void>("get", "/test-with-empty-response", {}); },

testParamWithSchemaRef: (param: CustomStringFormatTest) => { return this.Fetch<void>("get", `/test-param-with-schema-ref/${param}`, {}); },

testHeaderWithSchemaRef: () => { return this.Fetch<void>("get", "/test-header-with-schema-ref", {}); },

testHeaderOptional: () => { return this.Fetch<void>("get", "/test-header-optional", {}); },

testDates: () => { return this.Fetch<Person>("get", "/test-dates", {}); } };


}

export type AdditionalPropsTest = object;

export type AdditionalPropsTrueTest = object;

export type AdditionalpropsDefault = object;

export type Address = {
    "location"?: string;
    "city"?: string;
    "zipCode"?: ZipCode;
};

export type AllOfTest = {
    "items"?: Message[];
} & PaginationResponse;

export type AllOfWithOneElementTest = {
    "key"?: string;
};

export type AllOfWithOneRefElementTest = Profile;

export type AllOfWithXExtensibleEnum = Profile & {
    "status": string;
};

export type AnObjectWithAnItemsField = {
    "items": DefinitionFieldWithDash[];
};

export type AnObjectWithRefImport = {
    "prop1": SimpleDefinition;
};

export type Author = {
    "isDead"?: boolean;
    "info"?: Person;
};

export type Book = {
    "title"?: string;
    "author"?: Author;
};

export type ConstantIntegerTest = 100;

export type CustomStringFormatTest = string;

export type DefinitionFieldWithDash = {
    "id-field"?: string;
};

export type DisabledUserTest = {
    "enabled": false;
    "reason": string;
    "username": string;
};

export type DisjointUnionsUserTest = EnabledUserTest | DisabledUserTest;

export type EmailAddress = string;

export type EnabledUserTest = {
    "description": string;
    "enabled": true;
    "username": string;
};

export type EnumFalseTest = {
    "flag"?: false;
};

export type EnumTest = {
    "status"?: "value1" | "value2" | "value3";
};

export type EnumTrueTest = {
    "flag"?: true;
};

export type FiscalCode = string;

export type InlinePropertyTest = {
    "inlineProp"?: string;
};

export type IsInboxEnabled = boolean;

export type IsWebhookEnabled = boolean;

export type ListOfDefinitions = {
    "field"?: string;
}[];

export type ListOfReferences = DefinitionFieldWithDash[];

export type Message = {
    "id": string;
    "content": MessageContent;
    "sender_service_id"?: string;
};

export type MessageBodyMarkdown = string;

export type MessageContent = {
    "subject"?: MessageSubject;
    "markdown": MessageBodyMarkdown;
};

export type MessageSubject = string;

export type NestedObjectTest = {
    "inlineProp"?: string;
    "nestedObject"?: {
        "inlineProp"?: string;
    };
};

export type NewModel = {
    "id": string;
    "name": string;
};

export type NonNegativeIntegerTest = number;

export type NonNegativeNumberTest = number;

export type ObjectDefinitionWithImplicitType = {
    "prop_one"?: string;
    "prop_two"?: string;
};

export type ObjectDefinitionWithImplicitTypeAndAdditionalProperties = unknown;

export type OneOfTest = {
    "limited"?: boolean;
} | {
    "unlimited"?: boolean;
};

export type OrganizationFiscalCode = string;

export type OrganizationFiscalCodeTest = string;

export type PaginationResponse = {
    "page_size"?: number;
    "next"?: string;
};

export type Person = {
    "name"?: string;
    "address"?: Address;
    "birth"?: string;
    "death"?: string;
    "age"?: 20 | 40 | 50;
    "zipCode"?: string;
};

export type PreferredLanguage = string;

export type PreferredLanguages = PreferredLanguage[];

export type Profile = {
    "email"?: EmailAddress;
    "family_name": string;
    "fiscal_code": FiscalCode;
    "has_profile": boolean;
    "is_email_set": boolean;
    "is_inbox_enabled"?: IsInboxEnabled;
    "is_webhook_enabled"?: IsWebhookEnabled;
    "name": string;
    "preferred_email"?: EmailAddress;
    "preferred_languages"?: PreferredLanguages;
    "version": number;
    "payload"?: {};
};

export type SimpleDefinition = {
    "id": string;
};

export type WithinRangeExclusiveMaximumIntegerTest = number;

export type WithinRangeExclusiveMaximumNumberTest = number;

export type WithinRangeExclusiveMinMaxIntegerTest = number;

export type WithinRangeExclusiveMinMaxNumberTest = number;

export type WithinRangeExclusiveMinimumIntegerTest = number;

export type WithinRangeExclusiveMinimumNumberTest = number;

export type WithinRangeIntegerTest = number;

export type WithinRangeNumberTest = number;

export type WithinRangeStringTest = string;

export type ZipCode = string;


