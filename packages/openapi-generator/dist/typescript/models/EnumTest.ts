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

export class EnumTest {
    'status'?: EnumTestStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "EnumTestStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnumTest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum EnumTestStatusEnum {
    Value1 = 'value1',
    Value2 = 'value2',
    Value3 = 'value3'
}
