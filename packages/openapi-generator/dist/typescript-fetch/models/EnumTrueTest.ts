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
 * @interface EnumTrueTest
 */
export interface EnumTrueTest {
    /**
     * 
     * @type {boolean}
     * @memberof EnumTrueTest
     */
    flag?: EnumTrueTestFlagEnum;
}


/**
 * @export
 */
export const EnumTrueTestFlagEnum = {
    True: true
} as const;
export type EnumTrueTestFlagEnum = typeof EnumTrueTestFlagEnum[keyof typeof EnumTrueTestFlagEnum];


/**
 * Check if a given object implements the EnumTrueTest interface.
 */
export function instanceOfEnumTrueTest(value: object): value is EnumTrueTest {
    return true;
}

export function EnumTrueTestFromJSON(json: any): EnumTrueTest {
    return EnumTrueTestFromJSONTyped(json, false);
}

export function EnumTrueTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumTrueTest {
    if (json == null) {
        return json;
    }
    return {
        
        'flag': json['flag'] == null ? undefined : json['flag'],
    };
}

export function EnumTrueTestToJSON(value?: EnumTrueTest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'flag': value['flag'],
    };
}

