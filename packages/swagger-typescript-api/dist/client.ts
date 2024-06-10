/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Person {
  /** name of the person */
  name?: string;
  address?: Address;
  /** @format date-time */
  birth?: string;
  /** @format date */
  death?: string;
  age?: 20 | 40 | 50;
  /** @pattern [0-9]+ */
  zipCode?: string;
}

export interface Address {
  location?: string;
  city?: string;
  zipCode?: ZipCode;
}

/** @pattern ^\d{5}$ */
export type ZipCode = string;

export interface Author {
  isDead?: boolean;
  info?: Person;
}

export interface Book {
  /** title of the book */
  title?: string;
  author?: Author;
}

/**
 * User's fiscal code.
 * @pattern ^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$
 * @example "SPNDNL80R13C555X"
 */
export type FiscalCode = string;

/**
 * @format email
 * @example "foobar@example.com"
 */
export type EmailAddress = string;

/**
 * True if the recipient of a message wants to store its content for later retrieval.
 * @default false
 */
export type IsInboxEnabled = boolean;

/**
 * True if the recipient of a message wants to forward the notifications to the default webhook.
 * @default false
 */
export type IsWebhookEnabled = boolean;

/**
 * Profile
 * Describes the user's profile.
 */
export interface Profile {
  email?: EmailAddress;
  family_name: string;
  /** User's fiscal code. */
  fiscal_code: FiscalCode;
  has_profile: boolean;
  is_email_set: boolean;
  /** True if the recipient of a message wants to store its content for later retrieval. */
  is_inbox_enabled?: IsInboxEnabled;
  /** True if the recipient of a message wants to forward the notifications to the default webhook. */
  is_webhook_enabled?: IsWebhookEnabled;
  name: string;
  preferred_email?: EmailAddress;
  /** Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */
  preferred_languages?: PreferredLanguages;
  version: number;
  payload?: object;
}

/** SimpleDefinition */
export interface SimpleDefinition {
  id: string;
}

export interface DefinitionFieldWithDash {
  "id-field"?: string;
}

/**
 * The (optional) subject of the message - note that only some notification
 * channels support the display of a subject. When a subject is not provided,
 * one gets generated from the client attributes.
 * @minLength 10
 * @maxLength 120
 * @example "Welcome new user !"
 */
export type MessageSubject = string;

/**
 * The full version of the message, in plain text or Markdown format. The
 * content of this field will be delivered to channels that don't have any
 * limit in terms of content size (e.g. email, etc...).
 * @minLength 80
 * @maxLength 10000
 * @example "# This is a markdown header
 *
 * to show how easily markdown can be converted to **HTML**
 *
 * Remember: this has to be a long text."
 */
export type MessageBodyMarkdown = string;

export interface MessageContent {
  /**
   * The (optional) subject of the message - note that only some notification
   * channels support the display of a subject. When a subject is not provided,
   * one gets generated from the client attributes.
   */
  subject?: MessageSubject;
  /**
   * The full version of the message, in plain text or Markdown format. The
   * content of this field will be delivered to channels that don't have any
   * limit in terms of content size (e.g. email, etc...).
   */
  markdown: MessageBodyMarkdown;
}

/** Message */
export interface Message {
  id: string;
  content: MessageContent;
  sender_service_id?: string;
}

/** NewModel */
export interface NewModel {
  id: string;
  name: string;
}

/** Pagination response parameters. */
export interface PaginationResponse {
  /**
   * Number of items returned for each page.
   * @min 1
   * @example 2
   */
  page_size?: number;
  /**
   * Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
   * @format uri
   * @example "https://example.com/?p=0XXX2"
   */
  next?: string;
}

export type OneOfTest =
  | {
      limited?: boolean;
    }
  | {
      unlimited?: boolean;
    };

/** test if we can use allOf with just one element inside */
export type AllOfWithOneElementTest = {
  key?: string;
};

/** test if we can use allOf with just ref one element inside */
export type AllOfWithOneRefElementTest = Profile;

/** test if allOf with x-extensible-enum works fine */
export type AllOfWithXExtensibleEnum = Profile & {
  status: string;
};

export type AllOfTest = {
  items?: Message[];
} & PaginationResponse;

/** @example "it_IT" */
export type PreferredLanguage = string;

/** Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */
export type PreferredLanguages = PreferredLanguage[];

/**
 * What if a object has a field named items?
 * The case is an object like { items: [] }, which is legal
 */
export interface AnObjectWithAnItemsField {
  items: DefinitionFieldWithDash[];
}

/**
 * AnObjectWithRefImport
 * Describes an object with a ref import
 */
export interface AnObjectWithRefImport {
  prop1: SimpleDefinition;
}

/**
 * WithinRangeStringTest
 * @minLength 8
 * @maxLength 10
 */
export type WithinRangeStringTest = string;

/**
 * NonNegativeNumberTest
 * @min 0
 */
export type NonNegativeNumberTest = number;

/** ConstantIntegerTest */
export enum ConstantIntegerTest {
  Value100 = 100,
}

/**
 * NonNegativeIntegerTest
 * @min 0
 */
export type NonNegativeIntegerTest = number;

/**
 * WithinRangeIntegerTest
 * @min 0
 * @max 10
 */
export type WithinRangeIntegerTest = number;

/**
 * WithinRangeNumberTest
 * @min 0
 * @max 10
 */
export type WithinRangeNumberTest = number;

/**
 * WithinRangeExclusiveMaximumIntegerTest
 * @min 0
 * @max 10
 * @exclusiveMax true
 */
export type WithinRangeExclusiveMaximumIntegerTest = number;

/**
 * WithinRangeExclusiveMinimumIntegerTest
 * @min 0
 * @exclusiveMin true
 * @max 10
 */
export type WithinRangeExclusiveMinimumIntegerTest = number;

/**
 * WithinRangeExclusiveMinimumNumberTest
 * @min 0
 * @exclusiveMin true
 * @max 10
 */
export type WithinRangeExclusiveMinimumNumberTest = number;

/**
 * WithinRangeExclusiveMinMaxIntegerTest
 * @min 0
 * @exclusiveMin true
 * @max 10
 * @exclusiveMax true
 */
export type WithinRangeExclusiveMinMaxIntegerTest = number;

/**
 * WithinRangeExclusiveMinMaxNumberTest
 * @min 0
 * @exclusiveMin true
 * @max 10
 * @exclusiveMax true
 */
export type WithinRangeExclusiveMinMaxNumberTest = number;

/**
 * WithinRangeExclusiveMaximumNumberTest
 * @min 0
 * @max 10
 * @exclusiveMax true
 */
export type WithinRangeExclusiveMaximumNumberTest = number;

/** @format SomeCustomStringType */
export type CustomStringFormatTest = string;

export interface EnumTest {
  status?: "value1" | "value2" | "value3";
}

export type AdditionalPropsTest = Record<string, number[]>;

export type AdditionalPropsTrueTest = Record<string, any>;

/** @default {"test":[1000]} */
export type AdditionalpropsDefault = Record<string, number[]>;

export interface InlinePropertyTest {
  /**
   * The device global unique identifier.
   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
   */
  inlineProp?: string;
}

export interface NestedObjectTest {
  /**
   * The device global unique identifier.
   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
   */
  inlineProp?: string;
  nestedObject?: {
    /**
     * The device global unique identifier.
     * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
     */
    inlineProp?: string;
  };
}

/** @format OrganizationFiscalCode */
export type OrganizationFiscalCode = string;

/** @format OrganizationFiscalCode */
export type OrganizationFiscalCodeTest = string;

/** a definition which is a list of other definitions. */
export type ListOfDefinitions = {
  field?: string;
}[];

/** a definition which is a list of references to other definitions. */
export type ListOfReferences = DefinitionFieldWithDash[];

export interface EnabledUserTest {
  description: string;
  enabled: true;
  username: string;
}

export interface DisabledUserTest {
  enabled: false;
  reason: string;
  username: string;
}

export type DisjointUnionsUserTest = EnabledUserTest | DisabledUserTest;

export interface EnumTrueTest {
  flag?: true;
}

export interface EnumFalseTest {
  flag?: false;
}

export interface ObjectDefinitionWithImplicitType {
  prop_one?: string;
  prop_two?: string;
}

export type ObjectDefinitionWithImplicitTypeAndAdditionalProperties = any;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://localhost/api/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Test API
 * @version 1.0.0
 * @baseUrl https://localhost/api/v1
 *
 * Test API.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  testAuthBearer = {
    /**
     * No description
     *
     * @name TestAuthBearer
     * @request GET:/test-auth-bearer
     * @secure
     */
    testAuthBearer: (
      query: {
        qo?: string;
        qr: string;
        /**
         * An opaque identifier that points to the next item in the collection.
         * @min 1
         */
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-auth-bearer`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  testAuthBearerHttp = {
    /**
     * No description
     *
     * @name TestAuthBearerHttp
     * @request GET:/test-auth-bearer-http
     * @secure
     */
    testAuthBearerHttp: (
      query: {
        qo?: string;
        qr: string;
        /**
         * An opaque identifier that points to the next item in the collection.
         * @min 1
         */
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-auth-bearer-http`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  testSimpleToken = {
    /**
     * No description
     *
     * @name TestSimpleToken
     * @request GET:/test-simple-token
     * @secure
     */
    testSimpleToken: (
      query: {
        qo?: string;
        qr: string;
        /**
         * An opaque identifier that points to the next item in the collection.
         * @min 1
         */
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-simple-token`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  testMultipleSuccess = {
    /**
     * No description
     *
     * @name TestMultipleSuccess
     * @request GET:/test-multiple-success
     */
    testMultipleSuccess: (params: RequestParams = {}) =>
      this.request<Message, OneOfTest | void>({
        path: `/test-multiple-success`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  testFileUpload = {
    /**
     * No description
     *
     * @name TestFileUpload
     * @request POST:/test-file-upload
     */
    testFileUpload: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/test-file-upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  testBinaryFileUpload = {
    /**
     * No description
     *
     * @name TestBinaryFileUpload
     * @request POST:/test-binary-file-upload
     */
    testBinaryFileUpload: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/test-binary-file-upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  testBinaryFileDownload = {
    /**
     * No description
     *
     * @name TestBinaryFileDownload
     * @request GET:/test-binary-file-download
     */
    testBinaryFileDownload: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/test-binary-file-download`,
        method: "GET",
        ...params,
      }),
  };
  testResponseHeader = {
    /**
     * No description
     *
     * @name TestResponseHeader
     * @request GET:/test-response-header
     */
    testResponseHeader: (params: RequestParams = {}) =>
      this.request<Message, void>({
        path: `/test-response-header`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  testParameterWithReference = {
    /**
     * No description
     *
     * @name TestParameterWithReference
     * @request POST:/test-parameter-with-reference
     */
    testParameterWithReference: (
      query?: {
        "request-id"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-parameter-with-reference`,
        method: "POST",
        query: query,
        ...params,
      }),
  };
  testParameterWithBodyRef = {
    /**
     * No description
     *
     * @name TestParameterWithBodyReference
     * @request POST:/test-parameter-with-body-ref
     */
    testParameterWithBodyReference: (data: NewModel, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/test-parameter-with-body-ref`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  putTestParameterWithBodyRef = {
    /**
     * No description
     *
     * @name PutTestParameterWithBodyReference
     * @request PUT:/put-test-parameter-with-body-ref
     */
    putTestParameterWithBodyReference: (data: NewModel, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/put-test-parameter-with-body-ref`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  testParameterWithDash = {
    /**
     * No description
     *
     * @name TestParameterWithDash
     * @request GET:/test-parameter-with-dash/{path_param}
     */
    testParameterWithDash: (
      pathParam: string,
      query?: {
        "foo-bar"?: string;
        "request-id"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-parameter-with-dash/${pathParam}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  testParameterWithDashAndUnderscore = {
    /**
     * No description
     *
     * @name TestParameterWithDashAnUnderscore
     * @request GET:/test-parameter-with-dash-and_underscore/{path_param}
     */
    testParameterWithDashAnUnderscore: (
      pathParam: string,
      query?: {
        foo_bar?: string;
        "request-id"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-parameter-with-dash-and_underscore/${pathParam}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  testTwoPathParams = {
    /**
     * No description
     *
     * @name TestWithTwoParams
     * @request GET:/test-two-path_params/{first_param}/{second_param}
     */
    testWithTwoParams: (firstParam: string, secondParam: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/test-two-path_params/${firstParam}/${secondParam}`,
        method: "GET",
        ...params,
      }),
  };
  testPathLevelParameter = {
    /**
     * @description when we declare parameters at path level
     *
     * @name TestParametersAtPathLevel
     * @request GET:/test-path-level-parameter
     */
    testParametersAtPathLevel: (
      query: {
        "request-id": string;
        /**
         * An opaque identifier that points to the next item in the collection.
         * @min 1
         */
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/test-path-level-parameter`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  testSimple = {
    /**
     * @description simply test of patch endpoint are considered
     *
     * @name TestSimplePatch
     * @request PATCH:/test-simple
     */
    testSimplePatch: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/test-simple`,
        method: "PATCH",
        ...params,
      }),
  };
  testCustomTokenHeader = {
    /**
     * No description
     *
     * @name TestCustomTokenHeader
     * @request GET:/test-custom-token-header
     * @secure
     */
    testCustomTokenHeader: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/test-custom-token-header`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  testWithEmptyResponse = {
    /**
     * No description
     *
     * @name TestWithEmptyResponse
     * @request GET:/test-with-empty-response
     */
    testWithEmptyResponse: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/test-with-empty-response`,
        method: "GET",
        ...params,
      }),
  };
  testParamWithSchemaRef = {
    /**
     * No description
     *
     * @name TestParamWithSchemaRef
     * @request GET:/test-param-with-schema-ref/{param}
     */
    testParamWithSchemaRef: (param: CustomStringFormatTest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test-param-with-schema-ref/${param}`,
        method: "GET",
        ...params,
      }),
  };
  testHeaderWithSchemaRef = {
    /**
     * No description
     *
     * @name TestHeaderWithSchemaRef
     * @request GET:/test-header-with-schema-ref
     */
    testHeaderWithSchemaRef: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test-header-with-schema-ref`,
        method: "GET",
        ...params,
      }),
  };
  testHeaderOptional = {
    /**
     * No description
     *
     * @name TestHeaderOptional
     * @request GET:/test-header-optional
     */
    testHeaderOptional: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test-header-optional`,
        method: "GET",
        ...params,
      }),
  };
  testDates = {
    /**
     * No description
     *
     * @name TestDates
     * @request GET:/test-dates
     */
    testDates: (params: RequestParams = {}) =>
      this.request<Person, any>({
        path: `/test-dates`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
