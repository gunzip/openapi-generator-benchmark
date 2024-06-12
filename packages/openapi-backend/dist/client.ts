import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    export interface HeaderParameters {
        HeaderParamWithReference?: Parameters.HeaderParamWithReference;
    }
    namespace Parameters {
        export type HeaderParamWithReference = string;
        export type PaginationRequest = string;
        export type RequestId = string;
        export type RequiredRequestId = string;
    }
    export interface QueryParameters {
        PaginationRequest?: Parameters.PaginationRequest;
        RequestId?: Parameters.RequestId;
        RequiredRequestId?: Parameters.RequiredRequestId;
    }
    namespace Responses {
        export interface NotFound {
        }
    }
    namespace Schemas {
        export interface AdditionalPropsTest {
            [name: string]: number[];
        }
        export interface AdditionalPropsTrueTest {
            [name: string]: any;
        }
        export interface AdditionalpropsDefault {
            [name: string]: number[];
        }
        export interface Address {
            location?: string;
            city?: string;
            zipCode?: ZipCode /* ^\d{5}$ */;
        }
        /**
         * Pagination response parameters.
         */
        export interface AllOfTest {
            items?: /* Message */ Message[];
            /**
             * Number of items returned for each page.
             * example:
             * 2
             */
            page_size?: number;
            /**
             * Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
             * example:
             * https://example.com/?p=0XXX2
             */
            next?: string; // uri
        }
        /**
         * test if we can use allOf with just one element inside
         */
        export interface AllOfWithOneElementTest {
            key?: string;
        }
        /**
         * Profile
         * test if we can use allOf with just ref one element inside
         */
        export interface AllOfWithOneRefElementTest {
            email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            family_name: string;
            fiscal_code: /**
             * User's fiscal code.
             * example:
             * SPNDNL80R13C555X
             */
            FiscalCode /* ^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$ */;
            has_profile: boolean;
            is_email_set: boolean;
            is_inbox_enabled?: /* True if the recipient of a message wants to store its content for later retrieval. */ IsInboxEnabled;
            is_webhook_enabled?: /* True if the recipient of a message wants to forward the notifications to the default webhook. */ IsWebhookEnabled;
            name: string;
            preferred_email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            preferred_languages?: /* Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */ PreferredLanguages;
            version: number;
            payload?: {
                [key: string]: any;
            };
        }
        /**
         * Profile
         * test if allOf with x-extensible-enum works fine
         */
        export interface AllOfWithXExtensibleEnum {
            email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            family_name: string;
            fiscal_code: /**
             * User's fiscal code.
             * example:
             * SPNDNL80R13C555X
             */
            FiscalCode /* ^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$ */;
            has_profile: boolean;
            is_email_set: boolean;
            is_inbox_enabled?: /* True if the recipient of a message wants to store its content for later retrieval. */ IsInboxEnabled;
            is_webhook_enabled?: /* True if the recipient of a message wants to forward the notifications to the default webhook. */ IsWebhookEnabled;
            name: string;
            preferred_email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            preferred_languages?: /* Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */ PreferredLanguages;
            version: number;
            payload?: {
                [key: string]: any;
            };
            status: string;
        }
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
            prop1: /* SimpleDefinition */ SimpleDefinition;
        }
        export interface Author {
            isDead?: boolean;
            info?: Person;
        }
        export interface Book {
            /**
             * title of the book
             */
            title?: string;
            author?: Author;
        }
        /**
         * ConstantIntegerTest
         */
        export type ConstantIntegerTest = 100;
        export type CustomStringFormatTest = string; // SomeCustomStringType
        export interface DefinitionFieldWithDash {
            "id-field"?: string;
        }
        export interface DisabledUserTest {
            enabled: false;
            reason: string;
            username: string;
        }
        export type DisjointUnionsUserTest = EnabledUserTest | DisabledUserTest;
        /**
         * example:
         * foobar@example.com
         */
        export type EmailAddress = string; // email
        export interface EnabledUserTest {
            description: string;
            enabled: true;
            username: string;
        }
        export interface EnumFalseTest {
            flag?: false;
        }
        export interface EnumTest {
            status?: "value1" | "value2" | "value3";
        }
        export interface EnumTrueTest {
            flag?: true;
        }
        /**
         * User's fiscal code.
         * example:
         * SPNDNL80R13C555X
         */
        export type FiscalCode = string; // ^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$
        export interface InlinePropertyTest {
            /**
             * The device global unique identifier.
             */
            inlineProp?: string; // ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
        }
        /**
         * True if the recipient of a message wants to store its content for later retrieval.
         */
        export type IsInboxEnabled = boolean;
        /**
         * True if the recipient of a message wants to forward the notifications to the default webhook.
         */
        export type IsWebhookEnabled = boolean;
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
        /**
         * Message
         */
        export interface Message {
            id: string;
            content: MessageContent;
            sender_service_id?: string;
        }
        /**
         * The full version of the message, in plain text or Markdown format. The
         * content of this field will be delivered to channels that don't have any
         * limit in terms of content size (e.g. email, etc...).
         * example:
         * # This is a markdown header
         *
         * to show how easily markdown can be converted to **HTML**
         *
         * Remember: this has to be a long text.
         */
        export type MessageBodyMarkdown = string;
        export interface MessageContent {
            subject?: /**
             * The (optional) subject of the message - note that only some notification
             * channels support the display of a subject. When a subject is not provided,
             * one gets generated from the client attributes.
             * example:
             * Welcome new user !
             */
            MessageSubject;
            markdown: /**
             * The full version of the message, in plain text or Markdown format. The
             * content of this field will be delivered to channels that don't have any
             * limit in terms of content size (e.g. email, etc...).
             * example:
             * # This is a markdown header
             *
             * to show how easily markdown can be converted to **HTML**
             *
             * Remember: this has to be a long text.
             */
            MessageBodyMarkdown;
        }
        /**
         * The (optional) subject of the message - note that only some notification
         * channels support the display of a subject. When a subject is not provided,
         * one gets generated from the client attributes.
         * example:
         * Welcome new user !
         */
        export type MessageSubject = string;
        export interface NestedObjectTest {
            /**
             * The device global unique identifier.
             */
            inlineProp?: string; // ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
            nestedObject?: {
                /**
                 * The device global unique identifier.
                 */
                inlineProp?: string; // ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
            };
        }
        /**
         * NewModel
         */
        export interface NewModel {
            id: string;
            name: string;
        }
        /**
         * NonNegativeIntegerTest
         */
        export type NonNegativeIntegerTest = number;
        /**
         * NonNegativeNumberTest
         */
        export type NonNegativeNumberTest = number;
        export interface ObjectDefinitionWithImplicitType {
            prop_one?: string;
            prop_two?: string;
        }
        export interface ObjectDefinitionWithImplicitTypeAndAdditionalProperties {
            [name: string]: number[];
        }
        export type OneOfTest = {
            limited?: boolean;
        } | {
            unlimited?: boolean;
        };
        export type OrganizationFiscalCode = string; // OrganizationFiscalCode
        export type OrganizationFiscalCodeTest = string; // OrganizationFiscalCode
        /**
         * Pagination response parameters.
         */
        export interface PaginationResponse {
            /**
             * Number of items returned for each page.
             * example:
             * 2
             */
            page_size?: number;
            /**
             * Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
             * example:
             * https://example.com/?p=0XXX2
             */
            next?: string; // uri
        }
        export interface Person {
            /**
             * name of the person
             */
            name?: string;
            address?: Address;
            birth?: string; // date-time
            death?: string; // date
            age?: 20 | 40 | 50;
            zipCode?: string; // [0-9]+
        }
        /**
         * example:
         * it_IT
         */
        export type PreferredLanguage = string;
        /**
         * Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US.
         */
        export type PreferredLanguages = /**
         * example:
         * it_IT
         */
        PreferredLanguage[];
        /**
         * Profile
         * Describes the user's profile.
         */
        export interface Profile {
            email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            family_name: string;
            fiscal_code: /**
             * User's fiscal code.
             * example:
             * SPNDNL80R13C555X
             */
            FiscalCode /* ^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$ */;
            has_profile: boolean;
            is_email_set: boolean;
            is_inbox_enabled?: /* True if the recipient of a message wants to store its content for later retrieval. */ IsInboxEnabled;
            is_webhook_enabled?: /* True if the recipient of a message wants to forward the notifications to the default webhook. */ IsWebhookEnabled;
            name: string;
            preferred_email?: /**
             * example:
             * foobar@example.com
             */
            EmailAddress /* email */;
            preferred_languages?: /* Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */ PreferredLanguages;
            version: number;
            payload?: {
                [key: string]: any;
            };
        }
        /**
         * SimpleDefinition
         */
        export interface SimpleDefinition {
            id: string;
        }
        /**
         * WithinRangeExclusiveMaximumIntegerTest
         */
        export type WithinRangeExclusiveMaximumIntegerTest = number;
        /**
         * WithinRangeExclusiveMaximumNumberTest
         */
        export type WithinRangeExclusiveMaximumNumberTest = number;
        /**
         * WithinRangeExclusiveMinMaxIntegerTest
         */
        export type WithinRangeExclusiveMinMaxIntegerTest = number;
        /**
         * WithinRangeExclusiveMinMaxNumberTest
         */
        export type WithinRangeExclusiveMinMaxNumberTest = number;
        /**
         * WithinRangeExclusiveMinimumIntegerTest
         */
        export type WithinRangeExclusiveMinimumIntegerTest = number;
        /**
         * WithinRangeExclusiveMinimumNumberTest
         */
        export type WithinRangeExclusiveMinimumNumberTest = number;
        /**
         * WithinRangeIntegerTest
         */
        export type WithinRangeIntegerTest = number;
        /**
         * WithinRangeNumberTest
         */
        export type WithinRangeNumberTest = number;
        /**
         * WithinRangeStringTest
         */
        export type WithinRangeStringTest = string;
        export type ZipCode = string; // ^\d{5}$
    }
}
declare namespace Paths {
    namespace PutTestParameterWithBodyReference {
        export type RequestBody = /* NewModel */ Components.Schemas.NewModel;
        namespace Responses {
            export interface $201 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestAuthBearer {
        namespace Parameters {
            export type Cursor = string;
            export type Qo = string;
            export type Qr = string;
        }
        export interface QueryParameters {
            qo?: Parameters.Qo;
            qr: Parameters.Qr;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $403 {
            }
        }
    }
    namespace TestAuthBearerHttp {
        namespace Parameters {
            export type Cursor = string;
            export type Qo = string;
            export type Qr = string;
        }
        export interface QueryParameters {
            qo?: Parameters.Qo;
            qr: Parameters.Qr;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $403 {
            }
        }
    }
    namespace TestBinaryFileDownload {
        namespace Responses {
            /**
             * example:
             * iVBORw0KGgoAAAANSUhEUgAAAJQAAAB9CAYAAABEd0qeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAGaklEQVR4Xu3cP4gdVRzF8cVWrAQFLbQIlnYKtmI6LSIKWoiFhSCmkhQrFlrYaSo1kEptRBSEWFhZCQH/IEjARkFsxdLC7sm97In3nT135s31zYz3N6f4FO+3M3cGfl/YuNl4stvtzI5GDs1ayaFZKzk0ayWHZq3k0KyVHJq1kkOzVnJo1koOzVrJoVkrOTRrJYdmreTQrJUcmrWSQ7NWcmjWSg7NWsmhWSs5NGslh1v35wf37/4LPm9L5HDrVCRT8HlbIodbw0F89Phd2a237snwuYav4/P4eZHJ4dZwALVQahzUv+RwK3jxZSQtHJaD2lt4GUcLB7XRoHjRZRTJO4/cmfG8hkPaclhyGB0vGIsHB9VODqPDYrFwduvjtzOHNZ0cRoeFYtHMQbWTw6iwSCyYISSmrh0yFhY+RwxLDqNyUPOTw6hqQamIFL5vTC0kfHZQnXNQ85PDaHiRTMVzCHXWFHgvft+eyWE0Dmo5chjNXEExdbaC9wF+357JYTRYnFpuouJooc5WypgSft+eyWE0WNy5xZ6F8NS1v7N7T3eDyngSdY2C688930H1yUEtRw6j4aC+evOFDCH9/OX1DHPGYQDm6p4E5/J1DqpzDmo5chgVFokFAxb/+x+/ZA88eUeGz3w9q93HQQHeg98vAjmMykHNTw6j4W9Vn155JsOCsfgaXMfnTL0fz+Vz+H17JofR8AId1HzkMBos7o1Lj2VrB4X3wDn8vj2Tw2iwOAc1PzmMBotkP15/PcPCa8qIkt++uJrhxwDqnhKeo94h4fftmRxGo5aYOKjjk8PosEgsmoNhCAffqgBzUPcmHBS/TyRyGJ2Dmo8cbkVrWGMBwZZCAjncCgd1fHIYHf5xwNSgpnJQG+Gg5iOHUSEk/BNzLPqbq5czDuvifXdn333/dYa/9AXMcR2HhHMdVFAOan5yGA1C4qA4LA4Kf/hGMDX8h3Scs6WQQA6jcVDLkcMoOCT8yi0gKFxfCwsQDgcEWw4J5DAKB7U8OezdoSFxUMBhHWrLIYEc9s5BrUcOe1cLCgHhHwnUgmIIpYav3zI57J2DWo8c9o5DAg4Jn/n+05Mru+Tmu69k/GsrDNfhPj5vS+Swdw5qPXLYu1pINR9++2uGIPjHA7WwMOfrcQ7O5feLTA5756DWI4e945BqYWHhf918LkMIgGD4B5gM1/H97934IdtSWHLYOwe1HjnsHQKqhQSn79/IsPhaWCqiEl+P8wDP2UJYctg7B7UeOezdoSGxWlBTcUhlXEnksOSwdw5qPXLYOwR1aFhY9O2gzuYqlkG470wZUclBdcZBrUcOo5gaFNwOS0UzgM+pcVCdclDLk8NoVEzJXEHhf+ODz/wcB9U5FVPioI5PDqPBQoGDYhzU5699ko1+FmeVHFQQvFgHNR85jAYLxEJri4bWoPgc4Oc4qM45qOXIYTQcFODrvHAO6lDl2QnOxXMwd1Cdc1DLkcMoxkKCWlCXT16cpHxGUgsKIoYlh1E4qOXJYRRTg4LWoPgcwHP4PRxUZxzU8uQwCge1PDmMohYUL5p/RxxBqf+SGzL2HP66g+qMg1qeHEbBQWHB+MwhwbGCAn4uOKjOOKjlyWHvOCT4vwUF/P49k8PeOaj1yGHvWoP67KVL2U/Xns1UNEPKZ5VqQeE9+f17Joe9c1DrkcMoeIHAC0ZI+Fbnb3nt5DAKtbzEQc1HDqPB4vCtjMOpBfXgo0/vURGVykhKtaD8La9TWKCDmp8cRoVwGIcEDz3x8h4OjCEcxiExfs+eyWFUKqZExZQ4qOnkMCoVzRAOagyHouJK+Dp+z57JYVQqmiEqmiEcioop4ev4PXsmh1GpaIaoaKaoBVTGlfB79kwOo1LRDFGRTIFgHFRQKhoFP15QkUzBf2jHX/FwYPyePZPDqFQ8ioNqJ4dRIZRaQKDiKF24+OoedU2CkHiOsPj9IpDDqBCMg5qPHEbHAdUWzy48/Pyec1+n0MbO5feKQA6jc1DzkcPoeLFji8fX+ZxD71NfS/i8COQwOl7soWHwOYfep76W8HkRyGF0WPTYwvm62jnq3lJ5RsLnRCKH0fGCVQQJX1c7R91bKs9I+JxI5DA6tfQhtRDKSBJ1r8LnRCKH0aklD0EwfE4ZU6LuVficSOQwOrVkhYPhczBX9w7hcyKRw+jUkpUypoTPwVzdO4TPiWN38g8PspbBu6NEtgAAAABJRU5ErkJggg==
             */
            export type $200 = string; // binary
        }
    }
    namespace TestBinaryFileUpload {
        export interface RequestBody {
            file?: string; // binary
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TestCustomTokenHeader {
        namespace Responses {
            export interface $200 {
            }
            export interface $403 {
            }
        }
    }
    namespace TestDates {
        namespace Responses {
            export type $200 = Components.Schemas.Person;
        }
    }
    namespace TestFileUpload {
        export interface RequestBody {
            file?: string; // binary
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TestHeaderOptional {
        export interface HeaderParameters {
            param?: Parameters.Param;
        }
        namespace Parameters {
            export type Param = Components.Schemas.CustomStringFormatTest /* SomeCustomStringType */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TestHeaderWithSchemaRef {
        export interface HeaderParameters {
            param: Parameters.Param;
        }
        namespace Parameters {
            export type Param = Components.Schemas.CustomStringFormatTest /* SomeCustomStringType */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TestMultipleSuccess {
        namespace Responses {
            export type $200 = /* Message */ Components.Schemas.Message;
            export interface $202 {
            }
            export type $403 = Components.Schemas.OneOfTest;
            export interface $404 {
            }
        }
    }
    namespace TestParamWithSchemaRef {
        namespace Parameters {
            export type Param = Components.Schemas.CustomStringFormatTest /* SomeCustomStringType */;
        }
        export interface PathParameters {
            param: Parameters.Param;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TestParameterWithBodyReference {
        export type RequestBody = /* NewModel */ Components.Schemas.NewModel;
        namespace Responses {
            export interface $201 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestParameterWithDash {
        export interface HeaderParameters {
            headerInlineParam: Parameters.HeaderInlineParam;
            "x-header-param": Parameters.XHeaderParam;
        }
        namespace Parameters {
            export type FooBar = string;
            export type HeaderInlineParam = string;
            export type PathParam = string;
            export type RequestId = string;
            export type XHeaderParam = string;
        }
        export interface PathParameters {
            path_param: Parameters.PathParam;
        }
        export interface QueryParameters {
            "foo-bar"?: Parameters.FooBar;
            "request-id"?: Parameters.RequestId;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestParameterWithDashAnUnderscore {
        export interface HeaderParameters {
            headerInlineParam: Parameters.HeaderInlineParam;
            "x-header-param": Parameters.XHeaderParam;
        }
        namespace Parameters {
            export type FooBar = string;
            export type HeaderInlineParam = string;
            export type PathParam = string;
            export type RequestId = string;
            export type XHeaderParam = string;
        }
        export interface PathParameters {
            path_param: Parameters.PathParam;
        }
        export interface QueryParameters {
            foo_bar?: Parameters.FooBar;
            "request-id"?: Parameters.RequestId;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestParameterWithReference {
        namespace Parameters {
            export type RequestId = string;
        }
        export interface QueryParameters {
            "request-id"?: Parameters.RequestId;
        }
        namespace Responses {
            export interface $201 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestParametersAtPathLevel {
        namespace Responses {
            export interface $200 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestPathLevelParameter {
        namespace Parameters {
            export type $0 = Components.Parameters.RequiredRequestId;
            export type $1 = Components.Parameters.PaginationRequest;
        }
    }
    namespace TestResponseHeader {
        namespace Responses {
            export type $201 = /* Message */ Components.Schemas.Message;
            export interface $500 {
            }
        }
    }
    namespace TestSimplePatch {
        namespace Responses {
            export interface $200 {
            }
            export interface $500 {
            }
        }
    }
    namespace TestSimpleToken {
        namespace Parameters {
            export type Cursor = string;
            export type Qo = string;
            export type Qr = string;
        }
        export interface QueryParameters {
            qo?: Parameters.Qo;
            qr: Parameters.Qr;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $403 {
            }
        }
    }
    namespace TestWithEmptyResponse {
        namespace Responses {
            export type $200 = Components.Responses.NotFound;
        }
    }
    namespace TestWithTwoParams {
        namespace Parameters {
            export type FirstParam = string;
            export type SecondParam = string;
        }
        export interface PathParameters {
            first_param: Parameters.FirstParam;
            second_param: Parameters.SecondParam;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $500 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * testAuthBearer
   */
  'testAuthBearer'(
    parameters?: Parameters<Paths.TestAuthBearer.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestAuthBearer.Responses.$200>
  /**
   * testAuthBearerHttp
   */
  'testAuthBearerHttp'(
    parameters?: Parameters<Paths.TestAuthBearerHttp.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestAuthBearerHttp.Responses.$200>
  /**
   * testSimpleToken
   */
  'testSimpleToken'(
    parameters?: Parameters<Paths.TestSimpleToken.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestSimpleToken.Responses.$200>
  /**
   * testMultipleSuccess
   */
  'testMultipleSuccess'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestMultipleSuccess.Responses.$200 | Paths.TestMultipleSuccess.Responses.$202>
  /**
   * testFileUpload
   */
  'testFileUpload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TestFileUpload.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestFileUpload.Responses.$200>
  /**
   * testBinaryFileUpload
   */
  'testBinaryFileUpload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TestBinaryFileUpload.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestBinaryFileUpload.Responses.$200>
  /**
   * testBinaryFileDownload
   */
  'testBinaryFileDownload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestBinaryFileDownload.Responses.$200>
  /**
   * testResponseHeader
   */
  'testResponseHeader'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestResponseHeader.Responses.$201>
  /**
   * testParameterWithReference
   */
  'testParameterWithReference'(
    parameters?: Parameters<Paths.TestParameterWithReference.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParameterWithReference.Responses.$201>
  /**
   * testParameterWithBodyReference
   */
  'testParameterWithBodyReference'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TestParameterWithBodyReference.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParameterWithBodyReference.Responses.$201>
  /**
   * putTestParameterWithBodyReference
   */
  'putTestParameterWithBodyReference'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutTestParameterWithBodyReference.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTestParameterWithBodyReference.Responses.$201>
  /**
   * testParameterWithDash
   */
  'testParameterWithDash'(
    parameters?: Parameters<Paths.TestParameterWithDash.QueryParameters & Paths.TestParameterWithDash.HeaderParameters & Paths.TestParameterWithDash.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParameterWithDash.Responses.$200>
  /**
   * testParameterWithDashAnUnderscore
   */
  'testParameterWithDashAnUnderscore'(
    parameters?: Parameters<Paths.TestParameterWithDashAnUnderscore.QueryParameters & Paths.TestParameterWithDashAnUnderscore.HeaderParameters & Paths.TestParameterWithDashAnUnderscore.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParameterWithDashAnUnderscore.Responses.$200>
  /**
   * testWithTwoParams
   */
  'testWithTwoParams'(
    parameters?: Parameters<Paths.TestWithTwoParams.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestWithTwoParams.Responses.$200>
  /**
   * testParametersAtPathLevel - when we declare parameters at path level
   */
  'testParametersAtPathLevel'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParametersAtPathLevel.Responses.$200>
  /**
   * testSimplePatch - simply test of patch endpoint are considered
   */
  'testSimplePatch'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestSimplePatch.Responses.$200>
  /**
   * testCustomTokenHeader
   */
  'testCustomTokenHeader'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestCustomTokenHeader.Responses.$200>
  /**
   * testWithEmptyResponse
   */
  'testWithEmptyResponse'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestWithEmptyResponse.Responses.$200>
  /**
   * testParamWithSchemaRef
   */
  'testParamWithSchemaRef'(
    parameters?: Parameters<Paths.TestParamWithSchemaRef.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestParamWithSchemaRef.Responses.$200>
  /**
   * testHeaderWithSchemaRef
   */
  'testHeaderWithSchemaRef'(
    parameters?: Parameters<Paths.TestHeaderWithSchemaRef.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestHeaderWithSchemaRef.Responses.$200>
  /**
   * testHeaderOptional
   */
  'testHeaderOptional'(
    parameters?: Parameters<Paths.TestHeaderOptional.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestHeaderOptional.Responses.$200>
  /**
   * testDates
   */
  'testDates'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TestDates.Responses.$200>
}

export interface PathsDictionary {
  ['/test-auth-bearer']: {
    /**
     * testAuthBearer
     */
    'get'(
      parameters?: Parameters<Paths.TestAuthBearer.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestAuthBearer.Responses.$200>
  }
  ['/test-auth-bearer-http']: {
    /**
     * testAuthBearerHttp
     */
    'get'(
      parameters?: Parameters<Paths.TestAuthBearerHttp.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestAuthBearerHttp.Responses.$200>
  }
  ['/test-simple-token']: {
    /**
     * testSimpleToken
     */
    'get'(
      parameters?: Parameters<Paths.TestSimpleToken.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestSimpleToken.Responses.$200>
  }
  ['/test-multiple-success']: {
    /**
     * testMultipleSuccess
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestMultipleSuccess.Responses.$200 | Paths.TestMultipleSuccess.Responses.$202>
  }
  ['/test-file-upload']: {
    /**
     * testFileUpload
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TestFileUpload.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestFileUpload.Responses.$200>
  }
  ['/test-binary-file-upload']: {
    /**
     * testBinaryFileUpload
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TestBinaryFileUpload.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestBinaryFileUpload.Responses.$200>
  }
  ['/test-binary-file-download']: {
    /**
     * testBinaryFileDownload
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestBinaryFileDownload.Responses.$200>
  }
  ['/test-response-header']: {
    /**
     * testResponseHeader
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestResponseHeader.Responses.$201>
  }
  ['/test-parameter-with-reference']: {
    /**
     * testParameterWithReference
     */
    'post'(
      parameters?: Parameters<Paths.TestParameterWithReference.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParameterWithReference.Responses.$201>
  }
  ['/test-parameter-with-body-ref']: {
    /**
     * testParameterWithBodyReference
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TestParameterWithBodyReference.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParameterWithBodyReference.Responses.$201>
  }
  ['/put-test-parameter-with-body-ref']: {
    /**
     * putTestParameterWithBodyReference
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutTestParameterWithBodyReference.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTestParameterWithBodyReference.Responses.$201>
  }
  ['/test-parameter-with-dash/{path_param}']: {
    /**
     * testParameterWithDash
     */
    'get'(
      parameters?: Parameters<Paths.TestParameterWithDash.QueryParameters & Paths.TestParameterWithDash.HeaderParameters & Paths.TestParameterWithDash.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParameterWithDash.Responses.$200>
  }
  ['/test-parameter-with-dash-and_underscore/{path_param}']: {
    /**
     * testParameterWithDashAnUnderscore
     */
    'get'(
      parameters?: Parameters<Paths.TestParameterWithDashAnUnderscore.QueryParameters & Paths.TestParameterWithDashAnUnderscore.HeaderParameters & Paths.TestParameterWithDashAnUnderscore.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParameterWithDashAnUnderscore.Responses.$200>
  }
  ['/test-two-path_params/{first_param}/{second_param}']: {
    /**
     * testWithTwoParams
     */
    'get'(
      parameters?: Parameters<Paths.TestWithTwoParams.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestWithTwoParams.Responses.$200>
  }
  ['/test-path-level-parameter']: {
    /**
     * testParametersAtPathLevel - when we declare parameters at path level
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParametersAtPathLevel.Responses.$200>
  }
  ['/test-simple']: {
    /**
     * testSimplePatch - simply test of patch endpoint are considered
     */
    'patch'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestSimplePatch.Responses.$200>
  }
  ['/test-custom-token-header']: {
    /**
     * testCustomTokenHeader
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestCustomTokenHeader.Responses.$200>
  }
  ['/test-with-empty-response']: {
    /**
     * testWithEmptyResponse
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestWithEmptyResponse.Responses.$200>
  }
  ['/test-param-with-schema-ref/{param}']: {
    /**
     * testParamWithSchemaRef
     */
    'get'(
      parameters?: Parameters<Paths.TestParamWithSchemaRef.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestParamWithSchemaRef.Responses.$200>
  }
  ['/test-header-with-schema-ref']: {
    /**
     * testHeaderWithSchemaRef
     */
    'get'(
      parameters?: Parameters<Paths.TestHeaderWithSchemaRef.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestHeaderWithSchemaRef.Responses.$200>
  }
  ['/test-header-optional']: {
    /**
     * testHeaderOptional
     */
    'get'(
      parameters?: Parameters<Paths.TestHeaderOptional.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestHeaderOptional.Responses.$200>
  }
  ['/test-dates']: {
    /**
     * testDates
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TestDates.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

