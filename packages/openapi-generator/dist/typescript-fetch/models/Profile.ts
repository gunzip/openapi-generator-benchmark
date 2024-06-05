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
 * Describes the user's profile.
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    familyName: string;
    /**
     * User's fiscal code.
     * @type {string}
     * @memberof Profile
     */
    fiscalCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    hasProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    isEmailSet: boolean;
    /**
     * True if the recipient of a message wants to store its content for later retrieval.
     * @type {boolean}
     * @memberof Profile
     */
    isInboxEnabled?: boolean;
    /**
     * True if the recipient of a message wants to forward the notifications to the default webhook.
     * @type {boolean}
     * @memberof Profile
     */
    isWebhookEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    preferredEmail?: string;
    /**
     * Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US.
     * @type {Array<string>}
     * @memberof Profile
     */
    preferredLanguages?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Profile
     */
    version: number;
    /**
     * 
     * @type {object}
     * @memberof Profile
     */
    payload?: object;
}

/**
 * Check if a given object implements the Profile interface.
 */
export function instanceOfProfile(value: object): value is Profile {
    if (!('familyName' in value) || value['familyName'] === undefined) return false;
    if (!('fiscalCode' in value) || value['fiscalCode'] === undefined) return false;
    if (!('hasProfile' in value) || value['hasProfile'] === undefined) return false;
    if (!('isEmailSet' in value) || value['isEmailSet'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
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

export function ProfileToJSON(value?: Profile | null): any {
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
