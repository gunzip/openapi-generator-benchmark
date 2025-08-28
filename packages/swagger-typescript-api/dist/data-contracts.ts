/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** ConstantIntegerTest */
export type ConstantIntegerTest = 100;

export type Person = any;

export type Book = any;

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

export interface TestDeserUser {
  name: string;
  age: number;
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
 * @exclusiveMax 10
 */
export type WithinRangeExclusiveMaximumIntegerTest = number;

/**
 * WithinRangeExclusiveMinimumIntegerTest
 * @exclusiveMin 0
 * @max 10
 */
export type WithinRangeExclusiveMinimumIntegerTest = number;

/**
 * WithinRangeExclusiveMinimumNumberTest
 * @exclusiveMin 0
 * @max 10
 */
export type WithinRangeExclusiveMinimumNumberTest = number;

/**
 * WithinRangeExclusiveMinMaxIntegerTest
 * @exclusiveMin 0
 * @exclusiveMax 10
 */
export type WithinRangeExclusiveMinMaxIntegerTest = number;

/**
 * WithinRangeExclusiveMinMaxNumberTest
 * @exclusiveMin 0
 * @exclusiveMax 10
 */
export type WithinRangeExclusiveMinMaxNumberTest = number;

/**
 * WithinRangeExclusiveMaximumNumberTest
 * @min 0
 * @exclusiveMax 10
 */
export type WithinRangeExclusiveMaximumNumberTest = number;

/** @format SomeCustomStringType */
export type CustomStringFormatTest = string;

export interface EnumTest {
  status?: EnumTestStatusEnum;
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
  enabled: EnabledUserTestEnabledEnum;
  username: string;
}

export interface DisabledUserTest {
  enabled: DisabledUserTestEnabledEnum;
  reason: string;
  username: string;
}

export type DisjointUnionsUserTest = EnabledUserTest | DisabledUserTest;

export interface EnumTrueTest {
  flag?: EnumTrueTestFlagEnum;
}

export interface EnumFalseTest {
  flag?: EnumFalseTestFlagEnum;
}

export interface ObjectDefinitionWithImplicitType {
  prop_one?: string;
  prop_two?: string;
}

export type ObjectDefinitionWithImplicitTypeAndAdditionalProperties = any;

export interface ProblemDetails {
  /**
   * A URI reference that identifies the problem type.
   * @format uri
   * @example "https://example.com/probs/gateway-timeout"
   */
  type?: string;
  /**
   * A short, human-readable summary of the problem type.
   * @example "Gateway Timeout"
   */
  title?: string;
  /**
   * The HTTP status code generated by the origin server.
   * @example 504
   */
  status?: number;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   * @example "The upstream service failed to respond within the allotted time."
   */
  detail?: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   * @format uri
   */
  instance?: string;
}

/** Not found */
export type NotFound = any;

export interface TestAuthBearerParams {
  qo?: string;
  qr: string;
  /**
   * An opaque identifier that points to the next item in the collection.
   * @minLength 1
   */
  cursor?: string;
}

export type TestAuthBearerData = Person;

export interface TestAuthBearerHttpParams {
  qo?: string;
  qr: string;
  /**
   * An opaque identifier that points to the next item in the collection.
   * @minLength 1
   */
  cursor?: string;
}

export type TestAuthBearerHttpData = any;

export type TestAuthBearerHttpError =
  | {
      prop1: SimpleDefinition;
      prop2?: string;
    }
  | ProblemDetails;

export interface TestSimpleTokenParams {
  qo?: string;
  qr: string;
  /**
   * An opaque identifier that points to the next item in the collection.
   * @min 1
   */
  cursor?: string;
}

export type TestSimpleTokenData = any;

export type TestMultipleSuccessData = Message;

export type TestMultipleSuccessError = OneOfTest;

export interface TestFileUploadPayload {
  /** @format binary */
  file?: File;
}

export type TestFileUploadData = any;

export interface TestBinaryFileUploadPayload {
  /** @format binary */
  file?: File;
}

export type TestBinaryFileUploadData = any;

/**
 * @format binary
 * @example "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"
 */
export type TestBinaryFileDownloadData = File;

export type TestResponseHeaderData = Message;

export interface TestParameterWithReferenceParams {
  /** @minLength 10 */
  "request-id"?: string;
}

export type TestParameterWithReferenceData = any;

export interface TestInlineBodySchemaPayload {
  name: string;
  age?: number;
}

export type TestInlineBodySchemaData = any;

export type TestParameterWithBodyReferenceData = any;

export type PutTestParameterWithBodyReferenceData = any;

export interface TestParameterWithDashParams {
  "foo-bar"?: string;
  /** @minLength 10 */
  "request-id"?: string;
  /** @minLength 5 */
  pathParam: string;
}

export type TestParameterWithDashData = any;

export interface TestParameterWithDashAnUnderscoreParams {
  foo_bar?: string;
  /** @minLength 10 */
  "request-id"?: string;
  pathParam: string;
}

export type TestParameterWithDashAnUnderscoreData = any;

export type TestWithTwoParamsData = any;

export interface TestParametersAtPathLevelParams {
  "request-id": string;
  /**
   * An opaque identifier that points to the next item in the collection.
   * @min 1
   */
  cursor?: string;
}

export type TestParametersAtPathLevelData = any;

export type TestSimplePatchData = any;

export type TestCustomTokenHeaderData = any;

export type TestParamWithSchemaRefData = any;

export type TestHeaderWithSchemaRefData = any;

export type TestHeaderOptionalData = any;

export type TestOverriddenSecurityData = any;

export type TestOverriddenSecurityNoAuthData = any;

export type TestMultiContentTypesData = NewModel;

export type TestDeserializationData = TestDeserUser;

export type EnumTestStatusEnum = "value1" | "value2" | "value3";

export type EnabledUserTestEnabledEnum = true;

export type DisabledUserTestEnabledEnum = false;

export type EnumTrueTestFlagEnum = true;

export type EnumFalseTestFlagEnum = false;
