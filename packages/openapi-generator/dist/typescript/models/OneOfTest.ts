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

import { OneOfTestOneOf } from '../models/OneOfTestOneOf';
import { OneOfTestOneOf1 } from '../models/OneOfTestOneOf1';
import { HttpFile } from '../http/http';

export class OneOfTest {
    'limited'?: boolean;
    'unlimited'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limited",
            "baseName": "limited",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "unlimited",
            "baseName": "unlimited",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OneOfTest.attributeTypeMap;
    }

    public constructor() {
    }
}

