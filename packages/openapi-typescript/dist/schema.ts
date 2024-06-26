/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/test-auth-bearer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testAuthBearer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-auth-bearer-http": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testAuthBearerHttp"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-simple-token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testSimpleToken"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-multiple-success": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testMultipleSuccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-file-upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["testFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-binary-file-upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["testBinaryFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-binary-file-download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testBinaryFileDownload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-response-header": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testResponseHeader"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-parameter-with-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["testParameterWithReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-parameter-with-body-ref": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["testParameterWithBodyReference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/put-test-parameter-with-body-ref": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["putTestParameterWithBodyReference"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-parameter-with-dash/{path-param}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testParameterWithDash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-parameter-with-dash-and_underscore/{path-param}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testParameterWithDashAnUnderscore"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-two-path-params/{first-param}/{second-param}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testWithTwoParams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-path-level-parameter": {
        parameters: {
            query: {
                "request-id": components["parameters"]["RequiredRequestId"];
                /** @description An opaque identifier that points to the next item in the collection. */
                cursor?: components["parameters"]["PaginationRequest"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description when we declare parameters at path level */
        get: operations["testParametersAtPathLevel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-simple": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description simply test of patch endpoint are considered */
        patch: operations["testSimplePatch"];
        trace?: never;
    };
    "/test-custom-token-header": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testCustomTokenHeader"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-with-empty-response": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testWithEmptyResponse"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-param-with-schema-ref/{param}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testParamWithSchemaRef"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-header-with-schema-ref": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testHeaderWithSchemaRef"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-header-optional": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testHeaderOptional"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test-dates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["testDates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Person: {
            /** @description name of the person */
            name?: string;
            address?: components["schemas"]["Address"];
            /** Format: date-time */
            birth?: string;
            /** Format: date */
            death?: string;
            /** @enum {integer} */
            age?: 20 | 40 | 50;
            zipCode?: string;
        };
        Book: {
            /** @description title of the book */
            title?: string;
            author?: components["schemas"]["Author"];
        };
        /**
         * @description User's fiscal code.
         * @example SPNDNL80R13C555X
         */
        FiscalCode: string;
        /**
         * Format: email
         * @example foobar@example.com
         */
        EmailAddress: string;
        /**
         * @description True if the recipient of a message wants to store its content for later retrieval.
         * @default false
         */
        IsInboxEnabled: boolean;
        /**
         * @description True if the recipient of a message wants to forward the notifications to the default webhook.
         * @default false
         */
        IsWebhookEnabled: boolean;
        /**
         * Profile
         * @description Describes the user's profile.
         */
        Profile: {
            email?: components["schemas"]["EmailAddress"];
            family_name: string;
            fiscal_code: components["schemas"]["FiscalCode"];
            has_profile: boolean;
            is_email_set: boolean;
            is_inbox_enabled?: components["schemas"]["IsInboxEnabled"];
            is_webhook_enabled?: components["schemas"]["IsWebhookEnabled"];
            name: string;
            preferred_email?: components["schemas"]["EmailAddress"];
            preferred_languages?: components["schemas"]["PreferredLanguages"];
            version: number;
            payload?: Record<string, never>;
        };
        /** SimpleDefinition */
        SimpleDefinition: {
            id: string;
        };
        DefinitionFieldWithDash: {
            "id-field"?: string;
        };
        /**
         * @description The (optional) subject of the message - note that only some notification
         *     channels support the display of a subject. When a subject is not provided,
         *     one gets generated from the client attributes.
         * @example Welcome new user !
         */
        MessageSubject: string;
        /**
         * @description The full version of the message, in plain text or Markdown format. The
         *     content of this field will be delivered to channels that don't have any
         *     limit in terms of content size (e.g. email, etc...).
         * @example # This is a markdown header
         *
         *     to show how easily markdown can be converted to **HTML**
         *
         *     Remember: this has to be a long text.
         */
        MessageBodyMarkdown: string;
        MessageContent: {
            subject?: components["schemas"]["MessageSubject"];
            markdown: components["schemas"]["MessageBodyMarkdown"];
        };
        /** Message */
        Message: {
            id: string;
            content: components["schemas"]["MessageContent"];
            sender_service_id?: string;
        };
        /** NewModel */
        NewModel: {
            id: string;
            name: string;
        };
        /** @description Pagination response parameters. */
        PaginationResponse: {
            /**
             * @description Number of items returned for each page.
             * @example 2
             */
            page_size?: number;
            /**
             * Format: uri
             * @description Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
             * @example https://example.com/?p=0XXX2
             */
            next?: string;
        };
        OneOfTest: {
            limited?: boolean;
        } | {
            unlimited?: boolean;
        };
        /** @description test if we can use allOf with just one element inside */
        AllOfWithOneElementTest: {
            key?: string;
        };
        /** @description test if we can use allOf with just ref one element inside */
        AllOfWithOneRefElementTest: components["schemas"]["Profile"];
        /** @description test if allOf with x-extensible-enum works fine */
        AllOfWithXExtensibleEnum: components["schemas"]["Profile"] & {
            status: string;
        };
        AllOfTest: {
            items?: components["schemas"]["Message"][];
        } & components["schemas"]["PaginationResponse"];
        /** @example it_IT */
        PreferredLanguage: string;
        /** @description Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US. */
        PreferredLanguages: components["schemas"]["PreferredLanguage"][];
        /** @description What if a object has a field named items?
         *     The case is an object like { items: [] }, which is legal */
        AnObjectWithAnItemsField: {
            items: components["schemas"]["DefinitionFieldWithDash"][];
        };
        /**
         * AnObjectWithRefImport
         * @description Describes an object with a ref import
         */
        AnObjectWithRefImport: {
            prop1: components["schemas"]["SimpleDefinition"];
        };
        /** WithinRangeStringTest */
        WithinRangeStringTest: string;
        /** NonNegativeNumberTest */
        NonNegativeNumberTest: number;
        /**
         * ConstantIntegerTest
         * @enum {integer}
         */
        ConstantIntegerTest: 100;
        /** NonNegativeIntegerTest */
        NonNegativeIntegerTest: number;
        /** WithinRangeIntegerTest */
        WithinRangeIntegerTest: number;
        /** WithinRangeNumberTest */
        WithinRangeNumberTest: number;
        /** WithinRangeExclusiveMaximumIntegerTest */
        WithinRangeExclusiveMaximumIntegerTest: number;
        /** WithinRangeExclusiveMinimumIntegerTest */
        WithinRangeExclusiveMinimumIntegerTest: number;
        /** WithinRangeExclusiveMinimumNumberTest */
        WithinRangeExclusiveMinimumNumberTest: number;
        /** WithinRangeExclusiveMinMaxIntegerTest */
        WithinRangeExclusiveMinMaxIntegerTest: number;
        /** WithinRangeExclusiveMinMaxNumberTest */
        WithinRangeExclusiveMinMaxNumberTest: number;
        /** WithinRangeExclusiveMaximumNumberTest */
        WithinRangeExclusiveMaximumNumberTest: number;
        /** Format: SomeCustomStringType */
        CustomStringFormatTest: string;
        EnumTest: {
            /** @enum {string} */
            status?: "value1" | "value2" | "value3";
        };
        AdditionalPropsTest: {
            [key: string]: number[] | undefined;
        };
        AdditionalPropsTrueTest: {
            [key: string]: unknown;
        };
        /** @default {
         *       "test": [
         *         1000
         *       ]
         *     } */
        AdditionalpropsDefault: {
            [key: string]: number[] | undefined;
        };
        InlinePropertyTest: {
            /** @description The device global unique identifier. */
            inlineProp?: string;
        };
        NestedObjectTest: {
            /** @description The device global unique identifier. */
            inlineProp?: string;
            nestedObject?: {
                /** @description The device global unique identifier. */
                inlineProp?: string;
            };
        };
        /** Format: OrganizationFiscalCode */
        OrganizationFiscalCode: string;
        /** Format: OrganizationFiscalCode */
        OrganizationFiscalCodeTest: string;
        /** @description a definition which is a list of other definitions. */
        ListOfDefinitions: {
            field?: string;
        }[];
        /** @description a definition which is a list of references to other definitions. */
        ListOfReferences: components["schemas"]["DefinitionFieldWithDash"][];
        EnabledUserTest: {
            description: string;
            /** @enum {boolean} */
            enabled: true;
            username: string;
        };
        DisabledUserTest: {
            /** @enum {boolean} */
            enabled: false;
            reason: string;
            username: string;
        };
        DisjointUnionsUserTest: components["schemas"]["EnabledUserTest"] | components["schemas"]["DisabledUserTest"];
        EnumTrueTest: {
            /** @enum {boolean} */
            flag?: true;
        };
        EnumFalseTest: {
            /** @enum {boolean} */
            flag?: false;
        };
        ObjectDefinitionWithImplicitType: {
            prop_one?: string;
            prop_two?: string;
        };
        ObjectDefinitionWithImplicitTypeAndAdditionalProperties: {
            [key: string]: number[] | undefined;
        };
        ZipCode: string;
        Address: {
            location?: string;
            city?: string;
            zipCode?: components["schemas"]["ZipCode"];
        };
        Author: {
            isDead?: boolean;
            info?: components["schemas"]["Person"];
        };
    };
    responses: {
        /** @description Not found */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
    };
    parameters: {
        /** @description An opaque identifier that points to the next item in the collection. */
        PaginationRequest: string;
        RequestId: string;
        RequiredRequestId: string;
        /** @description A header param which has dashes in it */
        HeaderParamWithReference: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    testAuthBearer: {
        parameters: {
            query: {
                qo?: string;
                qr: string;
                /** @description An opaque identifier that points to the next item in the collection. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will send `Authenticated` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You do not have necessary permissions for the resource */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testAuthBearerHttp: {
        parameters: {
            query: {
                qo?: string;
                qr: string;
                /** @description An opaque identifier that points to the next item in the collection. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will send `Authenticated` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You do not have necessary permissions for the resource */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testSimpleToken: {
        parameters: {
            query: {
                qo?: string;
                qr: string;
                /** @description An opaque identifier that points to the next item in the collection. */
                cursor?: components["parameters"]["PaginationRequest"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will send `Authenticated` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You do not have necessary permissions for the resource */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testMultipleSuccess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will return a Message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
            /** @description Will return just accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You do not have necessary permissions for the resource */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OneOfTest"];
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description File uploaded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testBinaryFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description File uploaded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testBinaryFileDownload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Some success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
        };
    };
    testResponseHeader: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will create a Message */
            201: {
                headers: {
                    Location?: string;
                    Id?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testParameterWithReference: {
        parameters: {
            query?: {
                "request-id"?: components["parameters"]["RequestId"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testParameterWithBodyReference: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["NewModel"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    putTestParameterWithBodyReference: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["NewModel"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testParameterWithDash: {
        parameters: {
            query?: {
                "foo-bar"?: string;
                "request-id"?: components["parameters"]["RequestId"];
            };
            header: {
                headerInlineParam: string;
                /** @description A header param which has dashes in it */
                "x-header-param": components["parameters"]["HeaderParamWithReference"];
            };
            path: {
                "path-param": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testParameterWithDashAnUnderscore: {
        parameters: {
            query?: {
                foo_bar?: string;
                "request-id"?: components["parameters"]["RequestId"];
            };
            header: {
                headerInlineParam: string;
                /** @description A header param which has dashes in it */
                "x-header-param": components["parameters"]["HeaderParamWithReference"];
            };
            path: {
                "path-param": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testWithTwoParams: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                "first-param": string;
                "second-param": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testParametersAtPathLevel: {
        parameters: {
            query: {
                "request-id": components["parameters"]["RequiredRequestId"];
                /** @description An opaque identifier that points to the next item in the collection. */
                cursor?: components["parameters"]["PaginationRequest"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testSimplePatch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fatal error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testCustomTokenHeader: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Will send `Authenticated` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You do not have necessary permissions for the resource */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testWithEmptyResponse: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["NotFound"];
        };
    };
    testParamWithSchemaRef: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                param: components["schemas"]["CustomStringFormatTest"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testHeaderWithSchemaRef: {
        parameters: {
            query?: never;
            header: {
                param: components["schemas"]["CustomStringFormatTest"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testHeaderOptional: {
        parameters: {
            query?: never;
            header?: {
                param?: components["schemas"]["CustomStringFormatTest"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    testDates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Person"];
                };
            };
        };
    };
}
