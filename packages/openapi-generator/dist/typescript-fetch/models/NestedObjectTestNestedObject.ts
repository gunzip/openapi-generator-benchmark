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
 * @interface NestedObjectTestNestedObject
 */
export interface NestedObjectTestNestedObject {
    /**
     * The device global unique identifier.
     * @type {string}
     * @memberof NestedObjectTestNestedObject
     */
    inlineProp?: string;
}

/**
 * Check if a given object implements the NestedObjectTestNestedObject interface.
 */
export function instanceOfNestedObjectTestNestedObject(value: object): value is NestedObjectTestNestedObject {
    return true;
}

export function NestedObjectTestNestedObjectFromJSON(json: any): NestedObjectTestNestedObject {
    return NestedObjectTestNestedObjectFromJSONTyped(json, false);
}

export function NestedObjectTestNestedObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedObjectTestNestedObject {
    if (json == null) {
        return json;
    }
    return {
        
        'inlineProp': json['inlineProp'] == null ? undefined : json['inlineProp'],
    };
}

export function NestedObjectTestNestedObjectToJSON(value?: NestedObjectTestNestedObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'inlineProp': value['inlineProp'],
    };
}
