import * as r from '@typoas/runtime';
export type Person = {
    /**
     * name of the person
     */
    name?: string;
    address?: Address;
    birth?: Date;
    death?: string;
    age?: 20 | 40 | 50;
    zipCode?: string;
};
export type Address = {
    location?: string;
    city?: string;
    zipCode?: ZipCode;
};
export type ZipCode = string;
export type Author = {
    isDead?: boolean;
    info?: Person;
};
export type Book = {
    /**
     * title of the book
     */
    title?: string;
    author?: Author;
};
/**
 * User's fiscal code.
 * @example "SPNDNL80R13C555X"
 */
export type FiscalCode = string;
/**
 * @example "foobar@example.com"
 */
export type EmailAddress = string;
/**
 * True if the recipient of a message wants to store its content for later retrieval.
 */
export type IsInboxEnabled = boolean;
/**
 * True if the recipient of a message wants to forward the notifications to the default webhook.
 */
export type IsWebhookEnabled = boolean;
/**
 * Profile
 * Describes the user's profile.
 */
export type Profile = {
    email?: EmailAddress;
    family_name: string;
    fiscal_code: FiscalCode;
    has_profile: boolean;
    is_email_set: boolean;
    is_inbox_enabled?: IsInboxEnabled;
    is_webhook_enabled?: IsWebhookEnabled;
    name: string;
    preferred_email?: EmailAddress;
    preferred_languages?: PreferredLanguages;
    version: number;
    payload?: any;
};
/**
 * SimpleDefinition
 */
export type SimpleDefinition = {
    id: string;
};
export type DefinitionFieldWithDash = {
    'id-field'?: string;
};
/**
 * The (optional) subject of the message - note that only some notification
 * channels support the display of a subject. When a subject is not provided,
 * one gets generated from the client attributes.
 * @example "Welcome new user !"
 */
export type MessageSubject = string;
/**
 * The full version of the message, in plain text or Markdown format. The
 * content of this field will be delivered to channels that don't have any
 * limit in terms of content size (e.g. email, etc...).
 * @example "# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text."
 */
export type MessageBodyMarkdown = string;
export type MessageContent = {
    subject?: MessageSubject;
    markdown: MessageBodyMarkdown;
};
/**
 * Message
 */
export type Message = {
    id: string;
    content: MessageContent;
    sender_service_id?: string;
};
/**
 * NewModel
 */
export type NewModel = {
    id: string;
    name: string;
};
/**
 * Pagination response parameters.
 */
export type PaginationResponse = {
    /**
     * Number of items returned for each page.
     * @example 2
     */
    page_size?: number;
    /**
     * Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
     * @example "https://example.com/?p=0XXX2"
     */
    next?: string;
};
export type OneOfTest = {
    limited?: boolean;
} | {
    unlimited?: boolean;
};
/**
 * test if we can use allOf with just one element inside
 */
export type AllOfWithOneElementTest = {
    key?: string;
};
/**
 * test if we can use allOf with just ref one element inside
 */
export type AllOfWithOneRefElementTest = Profile;
/**
 * test if allOf with x-extensible-enum works fine
 */
export type AllOfWithXExtensibleEnum = Profile & {
    status: string;
};
export type AllOfTest = {
    items?: Message[];
} & PaginationResponse;
/**
 * @example "it_IT"
 */
export type PreferredLanguage = string;
/**
 * Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US.
 */
export type PreferredLanguages = PreferredLanguage[];
/**
 * What if a object has a field named items?
 * The case is an object like { items: [] }, which is legal
 */
export type AnObjectWithAnItemsField = {
    items: DefinitionFieldWithDash[];
};
/**
 * AnObjectWithRefImport
 * Describes an object with a ref import
 */
export type AnObjectWithRefImport = {
    prop1: SimpleDefinition;
};
/**
 * WithinRangeStringTest
 */
export type WithinRangeStringTest = string;
/**
 * NonNegativeNumberTest
 */
export type NonNegativeNumberTest = number;
/**
 * ConstantIntegerTest
 */
export type ConstantIntegerTest = 100;
/**
 * NonNegativeIntegerTest
 */
export type NonNegativeIntegerTest = number;
/**
 * WithinRangeIntegerTest
 */
export type WithinRangeIntegerTest = number;
/**
 * WithinRangeNumberTest
 */
export type WithinRangeNumberTest = number;
/**
 * WithinRangeExclusiveMaximumIntegerTest
 */
export type WithinRangeExclusiveMaximumIntegerTest = number;
/**
 * WithinRangeExclusiveMinimumIntegerTest
 */
export type WithinRangeExclusiveMinimumIntegerTest = number;
/**
 * WithinRangeExclusiveMinimumNumberTest
 */
export type WithinRangeExclusiveMinimumNumberTest = number;
/**
 * WithinRangeExclusiveMinMaxIntegerTest
 */
export type WithinRangeExclusiveMinMaxIntegerTest = number;
/**
 * WithinRangeExclusiveMinMaxNumberTest
 */
export type WithinRangeExclusiveMinMaxNumberTest = number;
/**
 * WithinRangeExclusiveMaximumNumberTest
 */
export type WithinRangeExclusiveMaximumNumberTest = number;
export type CustomStringFormatTest = string;
export type EnumTest = {
    status?: 'value1' | 'value2' | 'value3';
};
export type AdditionalPropsTest = {
    [key: string]: number[];
};
export type AdditionalPropsTrueTest = {
    [key: string]: any;
};
/**
 * @defaultValue
 * {
 *   "test": [
 *     1000
 *   ]
 * }
 */
export type AdditionalpropsDefault = {
    [key: string]: number[];
};
export type InlinePropertyTest = {
    /**
     * The device global unique identifier.
     */
    inlineProp?: string;
};
export type NestedObjectTest = {
    /**
     * The device global unique identifier.
     */
    inlineProp?: string;
    nestedObject?: {
        /**
         * The device global unique identifier.
         */
        inlineProp?: string;
    };
};
export type OrganizationFiscalCode = string;
export type OrganizationFiscalCodeTest = string;
/**
 * a definition which is a list of other definitions.
 */
export type ListOfDefinitions = {
    field?: string;
}[];
/**
 * a definition which is a list of references to other definitions.
 */
export type ListOfReferences = DefinitionFieldWithDash[];
export type EnabledUserTest = {
    description: string;
    enabled: true;
    username: string;
};
export type DisabledUserTest = {
    enabled: false;
    reason: string;
    username: string;
};
export type DisjointUnionsUserTest = EnabledUserTest | DisabledUserTest;
export type EnumTrueTest = {
    flag?: true;
};
export type EnumFalseTest = {
    flag?: false;
};
export type ObjectDefinitionWithImplicitType = any;
export type ObjectDefinitionWithImplicitTypeAndAdditionalProperties = any;
const $date_Person = (): r.TransformField[] => [[['access', "birth"], ['this']]];
const $date_Author = (): r.TransformField[] => [[['access', "info"], ['ref', $date_Person]]];
export type AuthMethods = {
    bearerToken?: r.ApiKeySecurityAuthentication;
    bearerTokenHttp?: r.HttpBearerSecurityAuthentication;
    simpleToken?: r.ApiKeySecurityAuthentication;
    customToken?: r.ApiKeySecurityAuthentication;
};
export function configureAuth(params?: r.CreateContextParams<AuthMethods>["authProviders"]): AuthMethods {
    return { bearerToken: params?.bearerToken && new r.ApiKeySecurityAuthentication({ name: 'Authorization', in: 'header' }, params.bearerToken), bearerTokenHttp: params?.bearerTokenHttp && new r.HttpBearerSecurityAuthentication(params.bearerTokenHttp), simpleToken: params?.simpleToken && new r.ApiKeySecurityAuthentication({ name: 'X-Functions-Key', in: 'header' }, params.simpleToken), customToken: params?.customToken && new r.ApiKeySecurityAuthentication({ name: 'custom-token', in: 'header' }, params.customToken) };
}
export function createContext<FetcherData>(params?: r.CreateContextParams<AuthMethods, FetcherData>): r.Context<AuthMethods, FetcherData> { return new r.Context<AuthMethods, FetcherData>({
    serverConfiguration: new r.ServerConfiguration('https://localhost/api/v1', {}),
    authMethods: configureAuth(params?.authProviders),
    ...params
}); }
export async function testAuthBearer<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    qo?: string;
    qr: string;
    cursor?: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-auth-bearer',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "qo",
            "qr",
            "cursor"
        ],
        auth: ["bearerToken"]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testAuthBearerHttp<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    qo?: string;
    qr: string;
    cursor?: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-auth-bearer-http',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "qo",
            "qr",
            "cursor"
        ],
        auth: ["bearerTokenHttp"]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testSimpleToken<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    qo?: string;
    qr: string;
    cursor?: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-simple-token',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "qo",
            "qr",
            "cursor"
        ],
        auth: ["simpleToken"]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testMultipleSuccess<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<Message | any> {
    const req = await ctx.createRequest({
        path: '/test-multiple-success',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testFileUpload<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, body: any, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-file-upload',
        params,
        method: r.HttpMethod.POST,
        body
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testBinaryFileUpload<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, body: any, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-binary-file-upload',
        params,
        method: r.HttpMethod.POST,
        body
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testBinaryFileDownload<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<Blob> {
    const req = await ctx.createRequest({
        path: '/test-binary-file-download',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testResponseHeader<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<Message> {
    const req = await ctx.createRequest({
        path: '/test-response-header',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testParameterWithReference<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    'request-id'?: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-parameter-with-reference',
        params,
        method: r.HttpMethod.POST,
        queryParams: [
            "request-id"
        ]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testParameterWithBodyReference<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, body: NewModel, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-parameter-with-body-ref',
        params,
        method: r.HttpMethod.POST,
        body
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function putTestParameterWithBodyReference<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, body: NewModel, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/put-test-parameter-with-body-ref',
        params,
        method: r.HttpMethod.PUT,
        body
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testParameterWithDash<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    path_param: string;
    'foo-bar'?: string;
    headerInlineParam: string;
    'request-id'?: string;
    'x-header-param': string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-parameter-with-dash/{path_param}',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "foo-bar",
            "request-id"
        ]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testParameterWithDashAnUnderscore<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    path_param: string;
    foo_bar?: string;
    headerInlineParam: string;
    'request-id'?: string;
    'x-header-param': string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-parameter-with-dash-and_underscore/{path_param}',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "foo_bar",
            "request-id"
        ]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testWithTwoParams<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    first_param: string;
    second_param: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-two-path_params/{first_param}/{second_param}',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
/**
 * when we declare parameters at path level
 */
export async function testParametersAtPathLevel<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    'request-id': string;
    cursor?: string;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-path-level-parameter',
        params,
        method: r.HttpMethod.GET,
        queryParams: [
            "request-id",
            "cursor"
        ]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
/**
 * simply test of patch endpoint are considered
 */
export async function testSimplePatch<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-simple',
        params,
        method: r.HttpMethod.PATCH
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testCustomTokenHeader<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-custom-token-header',
        params,
        method: r.HttpMethod.GET,
        auth: ["customToken"]
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testWithEmptyResponse<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-with-empty-response',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testParamWithSchemaRef<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    param: CustomStringFormatTest;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-param-with-schema-ref/{param}',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testHeaderWithSchemaRef<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    param: CustomStringFormatTest;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-header-with-schema-ref',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testHeaderOptional<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    param?: CustomStringFormatTest;
}, opts?: FetcherData): Promise<any> {
    const req = await ctx.createRequest({
        path: '/test-header-optional',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {});
}
export async function testDates<FetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {}, opts?: FetcherData): Promise<Person> {
    const req = await ctx.createRequest({
        path: '/test-dates',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {
        '200': { transforms: { date: [[['ref', $date_Person]]] } }
    });
}
