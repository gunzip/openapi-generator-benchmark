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
   * @minimum 1
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
