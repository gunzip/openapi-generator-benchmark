/* tslint:disable */
/* eslint-disable */
/**
 * Test API
 * Test API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * test if we can use allOf with just ref one element inside
 * @export
 * @interface AllOfWithOneRefElementTest
 */
export interface AllOfWithOneRefElementTest {
    /**
     * 
     * @type {string}
     * @memberof AllOfWithOneRefElementTest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AllOfWithOneRefElementTest
     */
    familyName: string;
    /**
     * User's fiscal code.
     * @type {string}
     * @memberof AllOfWithOneRefElementTest
     */
    fiscalCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof AllOfWithOneRefElementTest
     */
    hasProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AllOfWithOneRefElementTest
     */
    isEmailSet: boolean;
    /**
     * True if the recipient of a message wants to store its content for later retrieval.
     * @type {boolean}
     * @memberof AllOfWithOneRefElementTest
     */
    isInboxEnabled?: boolean;
    /**
     * True if the recipient of a message wants to forward the notifications to the default webhook.
     * @type {boolean}
     * @memberof AllOfWithOneRefElementTest
     */
    isWebhookEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AllOfWithOneRefElementTest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AllOfWithOneRefElementTest
     */
    preferredEmail?: string;
    /**
     * Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US.
     * @type {Array<string>}
     * @memberof AllOfWithOneRefElementTest
     */
    preferredLanguages?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof AllOfWithOneRefElementTest
     */
    version: number;
    /**
     * 
     * @type {object}
     * @memberof AllOfWithOneRefElementTest
     */
    payload?: object;
}

/**
 * Check if a given object implements the AllOfWithOneRefElementTest interface.
 */
export function instanceOfAllOfWithOneRefElementTest(value: object): value is AllOfWithOneRefElementTest {
    if (!('familyName' in value) || value['familyName'] === undefined) return false;
    if (!('fiscalCode' in value) || value['fiscalCode'] === undefined) return false;
    if (!('hasProfile' in value) || value['hasProfile'] === undefined) return false;
    if (!('isEmailSet' in value) || value['isEmailSet'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function AllOfWithOneRefElementTestFromJSON(json: any): AllOfWithOneRefElementTest {
    return AllOfWithOneRefElementTestFromJSONTyped(json, false);
}

export function AllOfWithOneRefElementTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllOfWithOneRefElementTest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'familyName': json['family_name'],
        'fiscalCode': json['fiscal_code'],
        'hasProfile': json['has_profile'],
        'isEmailSet': json['is_email_set'],
        'isInboxEnabled': json['is_inbox_enabled'] == null ? undefined : json['is_inbox_enabled'],
        'isWebhookEnabled': json['is_webhook_enabled'] == null ? undefined : json['is_webhook_enabled'],
        'name': json['name'],
        'preferredEmail': json['preferred_email'] == null ? undefined : json['preferred_email'],
        'preferredLanguages': json['preferred_languages'] == null ? undefined : json['preferred_languages'],
        'version': json['version'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}

export function AllOfWithOneRefElementTestToJSON(value?: AllOfWithOneRefElementTest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'family_name': value['familyName'],
        'fiscal_code': value['fiscalCode'],
        'has_profile': value['hasProfile'],
        'is_email_set': value['isEmailSet'],
        'is_inbox_enabled': value['isInboxEnabled'],
        'is_webhook_enabled': value['isWebhookEnabled'],
        'name': value['name'],
        'preferred_email': value['preferredEmail'],
        'preferred_languages': value['preferredLanguages'],
        'version': value['version'],
        'payload': value['payload'],
    };
}

