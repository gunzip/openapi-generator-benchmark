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

export class OneOfTestOneOf1 {
    'unlimited'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "unlimited",
            "baseName": "unlimited",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OneOfTestOneOf1.attributeTypeMap;
    }

    public constructor() {
    }
}

