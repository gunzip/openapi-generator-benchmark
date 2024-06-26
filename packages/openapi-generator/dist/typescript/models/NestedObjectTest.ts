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

import { NestedObjectTestNestedObject } from '../models/NestedObjectTestNestedObject';
import { HttpFile } from '../http/http';

export class NestedObjectTest {
    /**
    * The device global unique identifier.
    */
    'inlineProp'?: string;
    'nestedObject'?: NestedObjectTestNestedObject;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inlineProp",
            "baseName": "inlineProp",
            "type": "string",
            "format": ""
        },
        {
            "name": "nestedObject",
            "baseName": "nestedObject",
            "type": "NestedObjectTestNestedObject",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NestedObjectTest.attributeTypeMap;
    }

    public constructor() {
    }
}

