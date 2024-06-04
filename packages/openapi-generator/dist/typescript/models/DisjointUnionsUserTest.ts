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

import { DisabledUserTest } from '../models/DisabledUserTest';
import { EnabledUserTest } from '../models/EnabledUserTest';
import { HttpFile } from '../http/http';

export class DisjointUnionsUserTest {
    'description': string;
    'enabled': DisjointUnionsUserTestEnabledEnum;
    'username': string;
    'reason': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "DisjointUnionsUserTestEnabledEnum",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DisjointUnionsUserTest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DisjointUnionsUserTestEnabledEnum {
    False = 'false'
}

