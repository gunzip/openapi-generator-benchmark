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

import { SimpleDefinition } from '../models/SimpleDefinition';
import { HttpFile } from '../http/http';

/**
* Describes an object with a ref import
*/
export class AnObjectWithRefImport {
    'prop1': SimpleDefinition;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "prop1",
            "baseName": "prop1",
            "type": "SimpleDefinition",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnObjectWithRefImport.attributeTypeMap;
    }

    public constructor() {
    }
}

