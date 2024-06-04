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
 * 
 * @export
 * @interface EnabledUserTest
 */
export interface EnabledUserTest {
    /**
     * 
     * @type {string}
     * @memberof EnabledUserTest
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof EnabledUserTest
     */
    enabled: EnabledUserTestEnabledEnum;
    /**
     * 
     * @type {string}
     * @memberof EnabledUserTest
     */
    username: string;
}


/**
 * @export
 */
export const EnabledUserTestEnabledEnum = {
    True: true
} as const;
export type EnabledUserTestEnabledEnum = typeof EnabledUserTestEnabledEnum[keyof typeof EnabledUserTestEnabledEnum];


/**
 * Check if a given object implements the EnabledUserTest interface.
 */
export function instanceOfEnabledUserTest(value: object): value is EnabledUserTest {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function EnabledUserTestFromJSON(json: any): EnabledUserTest {
    return EnabledUserTestFromJSONTyped(json, false);
}

export function EnabledUserTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnabledUserTest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'enabled': json['enabled'],
        'username': json['username'],
    };
}

export function EnabledUserTestToJSON(value?: EnabledUserTest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'enabled': value['enabled'],
        'username': value['username'],
    };
}

