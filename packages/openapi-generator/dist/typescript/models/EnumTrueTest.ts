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

export class EnumTrueTest {
    'flag'?: EnumTrueTestFlagEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flag",
            "baseName": "flag",
            "type": "EnumTrueTestFlagEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnumTrueTest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum EnumTrueTestFlagEnum {
    True = 'true'
}

