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

import { PersonAddress } from '../models/PersonAddress';
import { HttpFile } from '../http/http';

export class Person {
    /**
    * name of the person
    */
    'name'?: string;
    'address'?: PersonAddress;
    'birth'?: Date;
    'death'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PersonAddress",
            "format": ""
        },
        {
            "name": "birth",
            "baseName": "birth",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "death",
            "baseName": "death",
            "type": "string",
            "format": "date"
        }    ];

    static getAttributeTypeMap() {
        return Person.attributeTypeMap;
    }

    public constructor() {
    }
}

