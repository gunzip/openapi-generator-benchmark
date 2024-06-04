/**
 * Test API
 * Test API.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* test if allOf with x-extensible-enum works fine
*/
export class AllOfWithXExtensibleEnum {
    'email'?: string;
    'familyName': string;
    /**
    * User\'s fiscal code.
    */
    'fiscalCode': string;
    'hasProfile': boolean;
    'isEmailSet': boolean;
    /**
    * True if the recipient of a message wants to store its content for later retrieval.
    */
    'isInboxEnabled'?: boolean;
    /**
    * True if the recipient of a message wants to forward the notifications to the default webhook.
    */
    'isWebhookEnabled'?: boolean;
    'name': string;
    'preferredEmail'?: string;
    /**
    * Indicates the User\'s preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., \'en_US\' specifies the language English and country US.
    */
    'preferredLanguages'?: Array<string>;
    'version': number;
    'payload'?: any;
    'status': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fiscalCode",
            "baseName": "fiscal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasProfile",
            "baseName": "has_profile",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEmailSet",
            "baseName": "is_email_set",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isInboxEnabled",
            "baseName": "is_inbox_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isWebhookEnabled",
            "baseName": "is_webhook_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredEmail",
            "baseName": "preferred_email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "any",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AllOfWithXExtensibleEnum.attributeTypeMap;
    }

    public constructor() {
    }
}

